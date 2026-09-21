"""Run after the Astro build: python3 scripts/check-site.py."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1] / 'dist'

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids, self.links, self.headings = set(), [], 0
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f"Duplicate ID: {attrs['id']}"
            self.ids.add(attrs['id'])
        self.headings += tag == 'h1'
        for attr in ['href', 'src', 'poster', 'data-src']:
            if attrs.get(attr):
                self.links.append(attrs[attr])

pages = {path: Page(path) for path in ROOT.rglob('*.html')}
assert len(pages) == 12, f'Expected 12 pages, got {len(pages)}'
checked = 0
for path, page in pages.items():
    assert page.headings == 1, f'{path}: expected exactly one main heading'
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        target = (ROOT / unquote(url.path).lstrip('/')) if url.path.startswith('/') else path.parent / unquote(url.path)
        if not url.path:
            target = path
        elif target.is_dir():
            target /= 'index.html'
        assert target.is_file(), f'{path}: missing target {link}'
        if url.fragment and target in pages:
            assert unquote(url.fragment) in pages[target].ids, f'{path}: missing anchor {link}'
        checked += 1
for prefix in ['', 'es/']:
    home = (ROOT / prefix / 'index.html').read_text()
    assert 'Moonshot Pitch Competition' in home
    assert home.count('class="hero-portrait"') == 1
    assert 'class="hero-about"' in home
    assert 'data-solar-system' in home
    assert home.count('class="nea-orbit"') == 100
    assert 'class="hobbies"' in home
    assert 'bennu-spin.mp4' in home
    assert home.count('class="project-video"') == 9
    assert home.count('class="institution-logo"') == 4
    assert home.count('class="media-card"') == 15
    assert '↗' not in home
    assert 'motion-toggle' not in home
    assert 'Bennu visualizations:' not in home
    assert 'Visualizaciones de Bennu:' not in home
    assert 'Meet me' not in home
    assert 'Conóceme' not in home
    assert 'Agentic workflows' in home
    assert 'class="collaboration-invite"' in home
    assert 'photo-cover' in home
    assert home.count('class="media-cover"') == 15
    assert home.count('role="button" tabindex="0"') == 5
    assert 'aria-label="Mechanical and Aerospace: 7"' in home
    assert 'data-skill-wheel' in home
    assert home.count('class="project-item"') == 16
    assert home.count('class="project-cover') == 16
    for section in ['research', 'projects', 'about', 'contact', 'publications', 'awards']:
        assert f'id="{section}"' in home
    assert 'routeLegacyHash' not in home
    assert 'data-starfield-root' in home
    assert 'data-star-travel' in home
    assert 'class="constellations"' not in home
    assert 'data-cosmic-stage' not in home
    assert home.count('class="satellite-toggle') == 21
    assert home.count('class="research-feature"') == 3
    assert 'class="research-grid"' in home
    assert '<polyline' not in home
    assert 'aged 15' not in home
    assert '15 a 18 años' not in home
    research = (ROOT / prefix / 'research/index.html').read_text()
    assert 'bennu-spin.mp4' in research
    assert research.count('class="publication-list"') == 1
    projects = (ROOT / prefix / 'projects/index.html').read_text()
    assert projects.count('class="project-item"') == 16
    assert projects.count('class="project-cover') == 16
    assert 'researchgate.net/profile/Moacir-Fonseca-Becker' in home
    assert 'linkedin.com/in/moacirfb/' in home
print(f'Passed: {len(pages)} pages, {checked} internal links/assets, both languages, 16 projects per language.')
