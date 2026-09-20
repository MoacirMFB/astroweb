"""Generate a static, illustrative heliocentric Lambert transfer in AU and years.

Zero-revolution, prograde universal-variable formulation:
https://docs.poliastro.space/en/stable/autoapi/poliastro/core/iod/index.html
Circular Earth orbit, hypothetical coplanar asteroid (a=1.6 AU, e=0.25).
This is an illustrative boundary-value problem, not a mission ephemeris.
"""
import json
import math as m
from pathlib import Path

MU = 4 * m.pi**2
TOF = 0.6
START = m.radians(-35)
END = m.radians(110)
A_AST, E_AST = 1.6, 0.25
R_END = A_AST * (1-E_AST**2) / (1+E_AST*m.cos(END))
R0 = [m.cos(START), m.sin(START)]
RF = [R_END*m.cos(END), R_END*m.sin(END)]
A = m.sin(END-START) * m.sqrt(R_END/(1-m.cos(END-START)))

def stumpff(z):
    if abs(z) < 1e-8:
        return 0.5-z/24, 1/6-z/120
    if z > 0:
        q=m.sqrt(z)
        return (1-m.cos(q))/z, (q-m.sin(q))/q**3
    q=m.sqrt(-z)
    return (m.cosh(q)-1)/(-z), (m.sinh(q)-q)/q**3

def flight(z):
    c,s=stumpff(z)
    y=1+R_END+A*(z*s-1)/m.sqrt(c)
    if y < 0:
        return -1, y
    return ((y/c)**1.5*s+A*m.sqrt(y))/m.sqrt(MU), y

lo,hi=-4*m.pi**2,4*m.pi**2-1e-6
for _ in range(120):
    z=(lo+hi)/2
    if flight(z)[0]<TOF: lo=z
    else: hi=z
elapsed,y=flight((lo+hi)/2)
f,g=1-y,A*m.sqrt(y/MU)
v0=[(RF[i]-f*R0[i])/g for i in range(2)]

# Independent RK4 propagation verifies the solved initial velocity and samples the arc.
def derivative(state):
    x,y,vx,vy=state
    r=m.hypot(x,y)
    return [vx,vy,-MU*x/r**3,-MU*y/r**3]

def step(state,h):
    k1=derivative(state)
    k2=derivative([v+h*k/2 for v,k in zip(state,k1)])
    k3=derivative([v+h*k/2 for v,k in zip(state,k2)])
    k4=derivative([v+h*k for v,k in zip(state,k3)])
    return [v+h*(a+2*b+2*c+d)/6 for v,a,b,c,d in zip(state,k1,k2,k3,k4)]

state=R0+v0
points=[R0]
for i in range(2400):
    state=step(state,TOF/2400)
    if (i+1)%20==0: points.append(state[:2])
error=m.dist(state[:2],RF)
assert error < 1e-7, f'Arrival error {error} AU'
assert abs(elapsed-TOF)<1e-10

def screen(p):
    return [round(245+104*p[0],3),round(230-104*p[1],3)]
def path(points):
    return 'M '+' L '.join(' '.join(map(str,screen(p))) for p in points)
asteroid=[]
for i in range(241):
    angle=2*m.pi*i/240
    r=A_AST*(1-E_AST**2)/(1+E_AST*m.cos(angle))
    asteroid.append([r*m.cos(angle),r*m.sin(angle)])
data={'transfer':path(points),'asteroidOrbit':path(asteroid),'earth':screen(R0),'asteroid':screen(RF),'midpoint':screen(points[len(points)//2])}
output=Path(__file__).resolve().parents[1]/'src/data/transfer.json'
output.write_text(json.dumps(data,indent=2)+'\n')
print(f'Lambert transfer verified: {TOF*365.25:.1f} days, arrival error {error:.2e} AU')
