type LinkItem = {
  label: string;
  href: string;
};

type ProjectVideo = {
  url: string;
  start?: number;
};

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectCard = {
  year: string;
  title: string;
  summary: string;
  highlights?: string[];
  note?: string;
  links?: LinkItem[];
  images?: ProjectImage[];
  video?: ProjectVideo;
  videoInCarousel?: boolean;
};

type AwardItem = {
  title: string;
  href?: string;
};

type LeadershipItem = {
  title: string;
  background: string[];
  links?: LinkItem[];
};

type EducationItem = {
  institution: string;
  programs: string[];
  href?: string;
  logoSrc: string;
  logoAlt: string;
};

type PublicationItem = {
  citation: string;
  venue: string;
  doi?: string;
  url?: string;
  urlLabel?: string;
  links?: LinkItem[];
};

type MediaKind =
  "podcast" | "video" | "news" | "official" | "outreach" | "profile";

type MediaLinkItem = {
  title: string;
  description: string;
  href: string;
  source: string;
  kind: MediaKind;
  previewImage?: string;
};

type MediaCategory = {
  title: string;
  iconKind: MediaKind;
  links: MediaLinkItem[];
};

type SkillArea = {
  key: string;
  label: string;
  shortLabel: string;
  description: string;
  color: string;
  skills: string[];
};

export const projects: ProjectCard[] = [
  {
    year: "2025",
    title: "Gateway State Estimation via Moon-Horizon Optical Navigation",
    summary:
      "Estimacion del estado de Gateway en NRHO usando solo imagenes del horizonte lunar con dinamica CR3BP, reduciendo la dependencia del seguimiento desde tierra.",
    highlights: [
      "Desarrollo de una tuberia de imagenes sinteticas con deteccion de borde lunar y ajuste conico para mediciones de navegacion.",
      "Implementacion de OPNAV de Christian-Robinson con filtrado EKF/UKF.",
      "Logro de precision de posicion a nivel de kilometros y velocidad a nivel de m/s en regimenes cislunares de multiples cuerpos.",
    ],
    note: "Completado como parte de AAE590 PET (2025) en Purdue University.",
    images: [
      { src: "/projects/AAE590PET1.png", alt: "AAE590 PET project figure 1" },
      { src: "/projects/AAE590PET2.png", alt: "AAE590 PET project figure 2" },
      { src: "/projects/AAE590PET3.png", alt: "AAE590 PET project figure 3" },
      { src: "/projects/AAE590PET4.png", alt: "AAE590 PET project figure 4" },
      { src: "/projects/AAE590PET5.png", alt: "AAE590 PET project figure 5" },
    ],
    video: {
      url: "https://drive.google.com/file/d/1UX4HTbBpxDPtS9wr6rqP6wO9B7Qv7zbv/view?usp=sharing",
    },
    videoInCarousel: true,
  },
  {
    year: "2024",
    title:
      "Distributed Consensus and Control for Multi-Satellite Debris Rendezvous",
    summary:
      "Diseno de un marco distribuido de estimacion y control para rendezvous cooperativo con desechos grandes bajo dinamica perturbada por J2.",
    highlights: [
      "Desarrollo de EKF distribuido con consenso de Metropolis para un estudio de caso Envisat con 10 naves espaciales.",
      "Convergencia en toda la red en 11 iteraciones con errores medios de 0.33 m en posicion y 0.006 m/s en velocidad.",
      "Implementacion de guiado PD que permitio rendezvous a nivel de metros en 600 s con ΔV inferior a 50 m/s por agente.",
    ],
    note: "Completado como parte de AAE590 MAAC (2024) en Purdue University.",
    images: [
      { src: "/projects/AAE590MAAC1.png", alt: "AAE590 MAAC project figure 1" },
      { src: "/projects/AAE590MAAC2.png", alt: "AAE590 MAAC project figure 2" },
      { src: "/projects/AAE590MAAC3.png", alt: "AAE590 MAAC project figure 3" },
      { src: "/projects/AAE590MAAC4.png", alt: "AAE590 MAAC project figure 4" },
      { src: "/projects/AAE590MAAC5.png", alt: "AAE590 MAAC project figure 5" },
      { src: "/projects/AAE590MAAC6.png", alt: "AAE590 MAAC project figure 6" },
      { src: "/projects/AAE590MAAC7.png", alt: "AAE590 MAAC project figure 7" },
    ],
  },
  {
    year: "2024",
    title: "Model Predictive Control for Direct Moon Landing from LPO",
    summary:
      "Desarrollo de un marco MPC convexo para transferencias directas desde orbitas de puntos de libracion hacia sitios de alunizaje lunar objetivos.",
    highlights: [
      "Enfoque en escenarios de alunizaje de precision cerca del polo sur lunar.",
      "Implementacion de restricciones condicionales de colision dentro de un modelo de dinamica CR3BP linealizado.",
      "Demostracion de seguimiento de trayectoria y adaptacion a perturbaciones mediante ajuste de penalizaciones de estado y control.",
    ],
    note: "Completado como parte de AAE590 Advanced Control Applications (2024) en Purdue University.",
    images: [
      { src: "/projects/AAE590ACA1.png", alt: "AAE590 ACA project figure 1" },
      { src: "/projects/AAE590ACA2.png", alt: "AAE590 ACA project figure 2" },
      { src: "/projects/AAE590ACA3.png", alt: "AAE590 ACA project figure 3" },
      { src: "/projects/AAE590ACA4.jpg", alt: "AAE590 ACA project figure 4" },
    ],
  },
  {
    year: "2023",
    title:
      "Orbital pursuer evasion game with incomplete information - class project",
    summary:
      "Este proyecto aborda un juego orbital de persecucion-evasion, donde una nave debe capturar un objetivo en movimiento en orbita con informacion incompleta.",
    highlights: [
      "Uso de estimacion con Filtro de Kalman Unscented para inferir el estado y la estrategia del evasor.",
      "Comparacion entre enfoques de control con informacion completa, juego de suma cero y control informado por UKF.",
      "Modelado de la dinamica con ecuaciones de Euler-Hill para escenarios realistas tipo desechos.",
    ],
    note: "Completado como parte de Optimal Control and Estimation (AAE5980) en Purdue University.",
    video: { url: "https://youtu.be/qDNzvLLw9oo" },
  },
  {
    year: "2023",
    title:
      "Using Cycle-Consistent Adversarial Networks translation to color surface images of Mars",
    summary:
      "Proyecto de aprendizaje automatico enfocado en traducir imagenes de la superficie de Marte a representaciones en color mediante metodos CycleGAN.",
    note: "Completado como parte de Machine Learning (STAT598 / ECE595) en Purdue University.",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/MoacirMFB/Mars_CycleGAN",
      },
    ],
    images: [
      {
        src: "/projects/A1-1536x887.png",
        alt: "CycleGAN Mars translation sample A1",
      },
      {
        src: "/projects/A2-1536x862.png",
        alt: "CycleGAN Mars translation sample A2",
      },
      {
        src: "/projects/A3-1536x909.png",
        alt: "CycleGAN Mars translation sample A3",
      },
      {
        src: "/projects/B1-1536x856.png",
        alt: "CycleGAN Mars translation sample B1",
      },
      {
        src: "/projects/B2-1536x836.png",
        alt: "CycleGAN Mars translation sample B2",
      },
      {
        src: "/projects/B3-1536x848.png",
        alt: "CycleGAN Mars translation sample B3",
      },
      {
        src: "/projects/C2-1536x761.png",
        alt: "CycleGAN Mars translation sample C2",
      },
      {
        src: "/projects/C3-1536x855.png",
        alt: "CycleGAN Mars translation sample C3",
      },
    ],
  },
  {
    year: "2023",
    title: "Distributed machine learning across AI companies - class project",
    summary:
      "Este proyecto estudio aprendizaje automatico distribuido en un contexto de sistemas de sistemas, modelado como empresas de IA colaborando con distintos roles de datos y red.",
    highlights: [
      "Analisis del efecto de la topologia y la diversidad de datos sobre la calidad del modelo.",
      "Implementacion de un proceso de tres fases: entrenamiento local, comparticion de parametros y agregacion.",
      "Observacion de relaciones entre la centralidad de nodos y la variacion en la precision del modelo.",
    ],
    note: "Completado como parte de Systems of Systems (AAE56000) en Purdue University.",
    images: [
      {
        src: "/projects/560_Project_2-1-1024x630.png",
        alt: "Distributed machine learning architecture diagram",
      },
      {
        src: "/projects/560_Project_1-1-1021x1024.png",
        alt: "Distributed machine learning results figure",
      },
    ],
  },
  {
    year: "2019-22",
    title:
      "Morazan Project - the 1st Central American satellite built through regional collaboration",
    summary:
      "Liderazgo en planificacion, requisitos y coordinacion tecnica para un esfuerzo satelital regional en segmentos espacial y terrestre.",
    highlights: [
      "Coordinacion de actores internos y externos, incluyendo JAXA y UNOOSA.",
      "Definicion de alrededor de 200 requisitos de mision, sistema y subsistemas.",
      "Implementacion de flujos seguros de documentacion en la nube y mentoria a equipos de subsistemas.",
    ],
    links: [
      { label: "Project site", href: "http://www.proyectomorazan.space/" },
      { label: "UNOOSA", href: "https://www.unoosa.org/" },
      { label: "JAXA", href: "https://global.jaxa.jp/" },
    ],
    video: { url: "https://youtu.be/dFWcI73o9kQ" },
  },
  {
    year: "2018-19",
    title:
      "Reusable Space Station mission concept for active debris removal in low Earth orbit",
    summary:
      "Desarrollado durante el ISU Space Studies Program (patrocinado por ESA), este concepto de mision abordo la remocion activa de desechos con principios de ecodiseno e ingenieria concurrente.",
    highlights: [
      "Desarrollo de un diseno Fase-0 para un concepto de manipulador robotico.",
      "Contribucion de representaciones CAD para la arquitectura de mision a nivel de estacion.",
      "Liderazgo en el desarrollo de un caso de negocio viable para remocion de desechos en orbita heliosincrona.",
    ],
    links: [
      {
        label: "Project Library Page",
        href: "https://isulibrary.isunet.edu/index.php?lvl=notice_display&id=10462",
      },
    ],
    video: { url: "https://youtu.be/fLtRxK0FIfA" },
  },
  {
    year: "2016-17",
    title:
      "Effect of non-inertial forces over two robotic arms under reduced (artificial) gravity",
    summary:
      "Tras ganar el 3er ciclo UNOOSA DropTES, este proyecto ejecuto experimentos de robotica bajo microgravedad y condiciones de gravedad inducida por rotacion en ZARM.",
    highlights: [
      "Liderazgo de un equipo multidisciplinario de cinco personas bajo estrictas restricciones tecnicas y de cronograma.",
      "Diseno y ejecucion de un experimento de brazo robotico en el Center of Applied Space Technology and Microgravity.",
      "Presentacion del analisis dinamico resultante en el International Astronautical Congress en Adelaide.",
    ],
    links: [
      {
        label: "Project Page (UNOOSA)",
        href: "https://www.unoosa.org/oosa/en/ourwork/psa/hsti/capacity-building/droptes-third-cycle.html",
      },
    ],
    video: { url: "https://www.youtube.com/watch?v=8AM3ntJYVpo" },
  },
  {
    year: "2016-17",
    title: "MultiGAS - autonomous remote volcanic gas monitoring station",
    summary:
      "Diseno, construccion, validacion y despliegue de una estacion autonoma de monitoreo de gases para entornos volcanicos exigentes.",
    highlights: [
      "El sistema midio CO2, H2S, O2, H2, vapor de agua, temperatura y presion.",
      "Combinacion de energia solar y eolica para operacion autonoma de varios anos.",
      "Habilitacion de telemetria a distancias superiores a 40 km.",
    ],
    links: [
      {
        label: "Gaslab YouTube Channel",
        href: "https://www.youtube.com/user/GasLabUCR",
      },
    ],
    video: { url: "https://youtu.be/BTOVRnA9cMQ" },
  },
  {
    year: "2015-16",
    title: "MINIGAS LITE - airborne volcanic activity monitoring system",
    summary:
      "Plataforma aerotransportada de monitoreo de gases probada en Kilauea con integracion de telemetria RF.",
    highlights: [
      "Diseno de integracion PCB de sensores CO2, SO2 y H2S sobre STM32-F4.",
      "Construccion de una cadena de telemetria de radiosonda usando Arduino y hardware iMet-1 RSB.",
      "Validacion del flujo de despliegue en globo estratosferico para medicion volcanica.",
    ],
    links: [
      {
        label: "Gaslab YouTube Channel",
        href: "https://www.youtube.com/user/GasLabUCR",
      },
    ],
    video: { url: "https://www.youtube.com/watch?v=-EJzZnKS7g4" },
  },
  {
    year: "2016",
    title:
      "Hexapod Robot Based on Arthropod Locomotion for Difficult Exploration Areas on Mars",
    summary:
      "Proyecto de la primera mision analogica MDRS integrada completamente por Latinoamerica, enfocado en conceptos robustos de locomocion de rover.",
    highlights: [
      "Diseno, integracion y prueba de la estructura mecanica del hexapodo.",
      "Uso de metodos iterativos de optimizacion de ingenieria y manufactura aditiva.",
    ],
    links: [
      {
        label: "Mission Report",
        href: "http://peru.marssociety.org/wp-content/uploads/2018/02/Team-Peru-and-Team-Latam-Application-Guide-2018.pdf",
      },
    ],
    images: [
      {
        src: "/projects/Hexapod2-1024x741.png",
        alt: "Hexapod robot prototype image 1",
      },
      {
        src: "/projects/Hexapod3-1024x777.jpg",
        alt: "Hexapod robot prototype image 2",
      },
      {
        src: "/projects/Pic-2016-Hexapod-Robot-Based-on-Arthropod-Locomotion-for-Difficult-Exploration-Areas-on-Mars-1.png",
        alt: "Hexapod robot project field image",
      },
    ],
  },
  {
    year: "2015",
    title: "In-flight control unit for a mass spectrometer and subsystems",
    summary:
      "Diseno y programacion de una unidad de control en vuelo basada en ATmega para instrumentacion de investigacion volcanica.",
    highlights: [
      "Habilitacion de operacion manual y automatica de subsistemas de espectrometro de masas.",
      "Integracion de sensado de temperatura, humedad, presion y flujo de aire.",
      "Gestion del control de bomba turbomolecular y de la distribucion de energia de la mision.",
    ],
    links: [
      {
        label: "Gaslab YouTube Channel",
        href: "https://www.youtube.com/user/GasLabUCR",
      },
    ],
    images: [
      {
        src: "/projects/minigas4-1024x818.jpg",
        alt: "Mass spectrometer control project image 1",
      },
      {
        src: "/projects/MassSpec1-1024x562.jpg",
        alt: "Mass spectrometer control project image 2",
      },
      {
        src: "/projects/minigas1-1024x523.jpg",
        alt: "Mass spectrometer control project image 3",
      },
      {
        src: "/projects/MassSpec2-1024x560.jpg",
        alt: "Mass spectrometer control project image 4",
      },
      {
        src: "/projects/minigas3-1024x769.jpg",
        alt: "Mass spectrometer control project image 5",
      },
      {
        src: "/projects/minigas6-1024x759.jpg",
        alt: "Mass spectrometer control project image 6",
      },
      {
        src: "/projects/minigas5-1024x883.jpg",
        alt: "Mass spectrometer control project image 7",
      },
    ],
  },
  {
    year: "2015-16",
    title:
      "Controller box for auto/manual control of hydraulic and pneumatic circuits",
    summary:
      "Desarrollo de un modulo multiproposito de salidas por relevadores para sistemas hidraulicos y neumaticos de laboratorio con automatizacion programable.",
    highlights: [
      "Integracion de una interfaz de usuario en LabVIEW para configuracion y operacion.",
      "Soporte de operacion autonoma sin supervision durante varios dias.",
    ],
    links: [
      { label: "NTCR Consulting", href: "http://www.ntcrconsulting.com/" },
    ],
    images: [
      {
        src: "/projects/GasLab-p2-1-1024x768.jpg",
        alt: "Controller box system hardware image",
      },
    ],
  },
  {
    year: "2014",
    title: "Blink-controlled small prototype of a remote-controlled car",
    summary:
      "Diseno de un prototipo de carro a control remoto accionado por actividad EEG y comandos por parpadeo.",
    highlights: [
      "Procesamiento de EEG en tiempo real con transformadas de Fourier para deteccion de estados mentales.",
      "Implementacion de logica de control para operar el vehiculo mediante parpadeos.",
      "Inspiracion para desarrollos de tecnologia asistiva dirigidos a ninos con discapacidad fisica.",
    ],
    links: [
      { label: "NTCR Consulting", href: "http://www.ntcrconsulting.com/" },
    ],
    video: { url: "https://youtu.be/eaAdc4N_em0" },
  },
  {
    year: "2015",
    title:
      "Launch of the first solid-state rocket with a scientific payload in Costa Rica",
    summary:
      "Participacion en el lanzamiento de una mision con carga util cientifica para medir variables atmosfericas en Costa Rica.",
    links: [
      {
        label: "University article",
        href: "https://www.ucr.ac.cr/noticias/2015/07/31/futuros-cientificos-costarricenses-ensamblan-y-encienden-sus-primeros-cohetes.html",
      },
    ],
    video: { url: "https://www.youtube.com/watch?v=z9DcP4HorTg" },
  },
];

export const awards: AwardItem[] = [
  { title: "2024 - Premio Somos Purdue" },
  {
    title:
      "2023 - Miembro seleccionado para la primera tripulación del Student Analog Astronaut Training Program (Purdue SEARCH)",
    href: "https://www.linkedin.com/posts/moacirfb_satp-search-mars-activity-7088241964965326848-au9c?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "2020 - Ganador de la 5ta ronda de KiboCube (UNOOSA y JAXA)",
    href: "https://www.unoosa.org/oosa/en/informationfor/media/winner-of-5th-round-of-the-kibocube-programme-to-deploy-a-satellite-from-the-international-space-station-announced-and-opening-of-6th-round.html",
  },
  {
    title:
      "2018 - Ganador del Business Pitch Competition, Departamento de Business and Management (ISU)",
  },
  {
    title:
      "2018 - Homenaje (graduación en mi honor) - Colegio Colegio Científico de Pérez Zeledón",
  },
  {
    title:
      "2017 - Finalista, Singularity University Costa Rica Global Impact Challenge",
  },
  {
    title:
      "2016 - Ganador de la 3ra campana, UNOOSA DropTES Fellowship Program",
    href: "https://www.unoosa.org/oosa/en/ourwork/psa/hsti/capacity-building/droptes-third-cycle.html",
  },
  {
    title: "2014 - 1er lugar en RobotiFest, concurso nacional de robotica",
    href: "https://www.ucr.ac.cr/noticias/2014/08/19/grandes-proyectos-salen-a-la-luz-en-robotifest-ucr.html",
  },
  {
    title:
      "2013 y 2014 - Beca de excelencia academica, Universidad de Costa Rica",
  },
  {
    title: "2012 - Becario del US Department of State, programa Global UGRAD",
    href: "https://issuu.com/worldlearning/docs/3._2012_-_2013_yearbook",
  },
  {
    title: "2012 y 2014 - 2do y 3er lugar en la Olimpiada Nacional de Robotica",
    href: "https://www.micit.go.cr/portaldos/index.php?option=com_content&view=article&id=6228:olimpiada-mundial-de-robotica-abre-las-puertas-a-talento-tico&catid=40&Itemid=1917",
  },
  {
    title:
      "2009 y 2010 - Mencion honorifica en las Olimpiadas Costarricenses de Fisica XII y XIII",
    href: "https://www.perezzeledon.net/generalenos-se-preparan-para-olimpiada-iberoamericana-de-fisica/",
  },
  { title: "2010 - Finalista de la Olimpiada de Matematica" },
  {
    title:
      "2010 - Ganador de la feria cientifica regional y finalista de la feria cientifica nacional",
  },
];

export const leadership: LeadershipItem[] = [
  {
    title: "2020 - Proyecto Morazan, primer satelite hondureno",
    background: [
      "Creacion de planes de trabajo iniciales, modelos de organizacion y cronogramas para casi 40 estudiantes distribuidos en los distintos segmentos del proyecto.",
      "Coordinacion de reuniones quincenales con subequipos para dar seguimiento al progreso, orientar el trabajo y mantener el ritmo de entrega.",
    ],
  },
  {
    title:
      "2019 - Organizador del 1er Central American Space Generation Workshop",
    background: [
      "Gestion de comunicaciones con delegados, moderacion de reuniones, invitacion de conferencistas, coordinacion de patrocinadores y apoyo para lograr una participacion record de aproximadamente 150 delegados.",
    ],
  },
  {
    title: "2016 - DropTES 3ra ronda, coordinador del equipo de investigacion",
    background: [
      "Propuesta del experimento de microgravedad ganador de UNOOSA DropTES y coordinacion del alcance del equipo, cronograma y restricciones de alistamiento.",
    ],
  },
  {
    title:
      "2015 - Miembro del staff del 1er campamento costarricense de coheteria",
    background: [
      "Apoyo a la organizacion del evento, guia en construccion y acompanamiento a participantes en actividades de coheteria de modelo.",
    ],
  },
  {
    title: "2012 - Grupo de robotica, Universidad de Costa Rica",
    background: [
      "Cofundacion del primer grupo de robotica en la UCR para crear espacio compartido, mentoria e infraestructura para proyectos estudiantiles de robotica.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Purdue University",
    href: "https://www.purdue.edu/",
    logoSrc: "/logos/purdue.png",
    logoAlt: "Purdue University logo",
    programs: [
      "Estudiante de doctorado en Aeronautica y Astronautica (2022 - actualidad)",
      "GPA: 3.88",
    ],
  },
  {
    institution: "International Space University",
    href: "https://www.isunet.edu/",
    logoSrc: "/logos/isu.png",
    logoAlt: "International Space University logo",
    programs: [
      "31st Space Studies Program (2018)",
      "Minor en Business and Management",
      "GPA: 4.0",
    ],
  },
  {
    institution: "University of Costa Rica",
    href: "https://www.ucr.ac.cr/",
    logoSrc: "/logos/ucr.png",
    logoAlt: "University of Costa Rica logo",
    programs: [
      "Ingenieria mecanica (2011-2016)",
      "Minor en ingenieria electrica",
      "Top 5% de la generacion (2/42)",
    ],
  },
  {
    institution: "University of Minnesota",
    href: "https://twin-cities.umn.edu/",
    logoSrc: "/logos/minnesota.png",
    logoAlt: "University of Minnesota logo",
    programs: [
      "Ingenieria mecanica (H2 2012)",
      "Un semestre de intercambio mediante una beca del US Department of State",
    ],
  },
];

export const skillAreas: SkillArea[] = [
  {
    key: "software",
    label: "Software",
    shortLabel: "Software",
    description:
      "Programación, aprendizaje automático y desarrollo asistido por modelos de lenguaje y flujos de trabajo con agentes.",
    color: "#21c8ff",
    skills: [
      "Python",
      "Java",
      "Machine Learning",
      "MATLAB",
      "Large language models (LLMs)",
      "Agentic workflows",
    ],
  },
  {
    key: "modeling",
    label: "Modeling and Simulation",
    shortLabel: "Modeling",
    description:
      "System modeling and simulation methods for mission architecture and analysis.",
    color: "#ff9f1c",
    skills: [
      "AnyLogic",
      "GENESYS",
      "Simulation",
      "Optimal Control",
      "Astrodynamics",
    ],
  },
  {
    key: "mechanical",
    label: "Mechanical and Aerospace",
    shortLabel: "Mechanical",
    description:
      "Mechanical design and aerospace system engineering from concept through prototyping.",
    color: "#06d6a0",
    skills: [
      "SolidWorks",
      "Inventor",
      "Fusion",
      "AutoCAD",
      "3D Printing",
      "Aerospace Systems",
      "Satellite Design",
    ],
  },
  {
    key: "electrical",
    label: "Electrical and Embedded",
    shortLabel: "Electrical",
    description:
      "Electronics design, embedded integration, sensing, and field-ready hardware work.",
    color: "#ff4d6d",
    skills: [
      "KiCAD",
      "OrCAD",
      "Data Acquisition",
      "Embedded Systems",
      "Networking",
      "Soldering",
      "RTOS",
    ],
  },
  {
    key: "platforms",
    label: "Platforms and Workflow",
    shortLabel: "Platforms",
    description:
      "Tooling used for deployment, analysis workflows, documentation, and collaboration.",
    color: "#b8f12c",
    skills: [
      "GNU/Linux",
      "LaTeX",
      "LabVIEW",
      "Spreadsheets",
      "WordPress",
      "Google Cloud",
    ],
  },
];

export const publications: PublicationItem[] = [
  {
    citation:
      "M. Fonseca Becker, K. Hernández Bandrich, N. E. May, S. M. Patwardhan, A. Massini, and A. Capannolo, 2026. Virtual Thrust-Based Control Formulation for Multiple Kinetic Impactor Asteroid Deflection.",
    venue:
      "30th International Symposium on Space Flight Dynamics (ISSFD), Toulouse, France, 2026.",
    links: [
      { label: "Detalles", href: "/publications/virtual-thrust-issfd-2026/" },
      {
        label: "PDF",
        href: "/publications/virtual-thrust-issfd-2026/virtual-thrust-issfd-2026.pdf",
      },
    ],
  },
  {
    citation:
      "A. Massini, N. E. May, M. Fonseca Becker, and A. Capannolo, 2026. Earth-Moon Orbit Design for a Rapid-Response Asteroid Interceptor System.",
    venue:
      "30th International Symposium on Space Flight Dynamics (ISSFD), Toulouse, France, 2026.",
    links: [
      {
        label: "Detalles",
        href: "/publications/earth-moon-interceptor-issfd-2026/",
      },
      {
        label: "PDF",
        href: "/publications/earth-moon-interceptor-issfd-2026/earth-moon-interceptor-issfd-2026.pdf",
      },
    ],
  },
  {
    citation:
      "Schmitt, R.N., Becker, M.F., DeLaurentis, D., Capannolo, A., 2025. An Explainability-Based Framework for Evaluating Space Mission Architectures Using Sandbox Games.",
    venue: "Aerotecnica Missili & Spazio, pp. 1-26.",
    doi: "10.1007/s42496-025-00293-1",
  },
  {
    citation:
      "Schmitt, R.N., Becker, M.F., DeLaurentis, D., Oguri, K., 2025. Design of Space Systems and Operational Mission Architectures Using Sandbox Games.",
    venue: "Acta Astronautica.",
    doi: "10.1016/j.actaastro.2025.04.004",
  },
  {
    citation:
      "Becker, M.F., Reynel, G., Francisco, S., Mauricio, A., Eduardo, G., Fernando, Z., Luis, M., Carlos, A., Maria Jose, M., Oliver, S., 2022. Morazan Project Ground and Space Systems: Results of a Successful Preliminary Design for Space and Ground Segments, International Cooperation, Knowledge Transfer and Lessons Learned.",
    venue: "In: 73rd International Astronautical Congress, Paris.",
    url: "https://iafastro.directory/iac/paper/id/59527/summary/",
    urlLabel: "IAC summary",
  },
  {
    citation:
      "Javier, M., Vilma, O., Eduardo, G., Fernando, Z., Becker, M.F., Luis, M., Carlos, A., Maria Jose, M., Oliver, S., 2020. Cabanas: First Honduran Academic Ground Station for small satellite missions.",
    venue: "In: 71st International Astronautical Congress.",
    url: "https://iafastro.directory/iac/paper/id/59527/summary/",
    urlLabel: "IAC summary",
  },
  {
    citation:
      "Javier, M., Becker, M.F., Luis, M., Eduardo, G., Maria Jose, M., Oliver, S., Carlos E., A., Fernando, Z., 2020. Paving the way to the stars: Inclusion and education through space.",
    venue:
      "In: International Astronautical Congress Cyberspace Edition. International Astronautical Federation.",
  },
  {
    citation:
      "Becker, M.F., Aureliano, R., Alexander, O., Shirrel, A., Yanina, H., Rudiger, J., Olga, Z., Singh, P., Tiago, S., 2019. Space Station Concept for Active Debris Removal Applying EcoDesign Principles.",
    venue: "In: 70th International Astronautical Congress.",
  },
  {
    citation:
      "Luis, M., Becker, M.F., Carlos E., A., Maria Jose, M., Fernando, Z., Javier, M., Eduardo, G., Oliver, S., 2019. Morazan MRZ-SAT CubeSat project for integration of the Central American Nations through collaboration in Space.",
    venue:
      "In: 70th International Astronautical Congress. International Astronautical Federation.",
  },
  {
    citation:
      "Becker, M.F., Nicole, C., Carlos, M., Renato, R., Ernesto, C., 2017. Analysis of scaled robotic arm manipulators under microgravity conditions.",
    venue:
      "In: 68th International Astronautical Congress. Adelaide: International Astronautical Federation.",
  },
];

export const externalMediaCategories: MediaCategory[] = [
  {
    title: "Podcasts y Entrevistas",
    iconKind: "podcast",
    links: [
      {
        title: "epiSTEMas Episode E061",
        description:
          "Conversacion en podcast sobre ingenieria aeroespacial y la participacion centroamericana en el espacio.",
        href: "https://epistemaspod.podbean.com/e/moacir-fonseca-becker-ingenieria-mecanica-y-centroamerica-en-el-espacio/",
        source: "EpiSTEMas",
        kind: "podcast",
        previewImage: "https://i.ytimg.com/vi/oIhVfwIRsbI/hqdefault.jpg",
      },
      {
        title: "UNOOSA LEAD Youth Innovation Festival Panel",
        description:
          "Segmento de panel con la Oficina de las Naciones Unidas para Asuntos del Espacio Ultraterrestre.",
        href: "https://www.youtube.com/watch?v=gW7j54dQGX0&t=970s",
        source: "YouTube / UNOOSA",
        kind: "video",
      },
      {
        title: "La Reaccion CR Interview",
        description: "Entrevista y conversacion en medios en idioma espanol.",
        href: "https://www.youtube.com/watch?v=UKomvqgaHiU&t=402s",
        source: "YouTube",
        kind: "video",
      },
    ],
  },
  {
    title: "Noticias y Articulos Destacados",
    iconKind: "news",
    links: [
      {
        title: "Innovative solutions abound at Moonshot Pitch Challenge",
        description: "Purdue destaca el primer lugar de Sentinel Space en la categoría Moonshot, con Moacir Fonseca Becker y Sidh Sikka.",
        href: "https://www.purdue.edu/newsroom/2026/Q3/innovative-solutions-abound-at-moonshot-pitch-challenge/",
        source: "Purdue News · September 2026",
        kind: "news",
      },
      {
        title: "How Kerbal Space Program Is Inspiring Real Mission Designs",
        description:
          "Articulo destacado que menciona a Moacir F. Becker en contexto de diseno de misiones.",
        href: "https://www.universetoday.com/articles/how-kerbal-space-program-is-inspiring-real-mission-designs",
        source: "Universe Today",
        kind: "news",
      },
      {
        title: "Robotifest Projects at UCR",
        description:
          "Articulo universitario sobre proyectos de robotica y resultados de competencia.",
        href: "https://www.ucr.ac.cr/noticias/2014/8/19/grandes-proyectos-salen-a-la-luz-en-robotifest-ucr/imprimir.html?empotrar=true&ruta=https%3A%2F%2Fwww.ucr.ac.cr%2Fnoticias%2F2014%2F8%2F19%2Fgrandes-proyectos-salen-a-la-luz-en-robotifest-ucr.html",
        source: "Universidad de Costa Rica",
        kind: "news",
      },
      {
        title: "DropTES Third Cycle Overview",
        description:
          "Resumen oficial del tercer ciclo de DropTES y de los equipos participantes.",
        href: "https://www.unoosa.org/oosa/en/ourwork/psa/hsti/capacity-building/droptes-third-cycle.html",
        source: "UNOOSA",
        kind: "news",
      },
    ],
  },
  {
    title: "Paginas Oficiales e Institucionales",
    iconKind: "official",
    links: [
      {
        title: "UNOOSA Hypergravity and Microgravity Webinar Track",
        description:
          "Referencias de ganadores de DropTES con materiales de webinar.",
        href: "https://www.unoosa.org/oosa/en/ourwork/access2space4all/HMTrack_Webinars.html",
        source: "UNOOSA",
        kind: "official",
      },
      {
        title: "UNOOSA Awardees: Costa Rica TEC and UCR",
        description:
          "Listado institucional de galardonados para participantes de Costa Rica.",
        href: "https://www.unoosa.org/oosa/en/ourwork/access2space4all/awardees/costa_rica_tec_ucr.html",
        source: "UNOOSA",
        kind: "official",
      },
      {
        title: "UNOOSA Common Webinars",
        description:
          "Indice de webinars con referencias a DropTES y medios relacionados.",
        href: "https://www.unoosa.org/oosa/en/ourwork/access2space4all/Common_Webinars.html",
        source: "UNOOSA",
        kind: "official",
      },
      {
        title: "MRZ-SAT Project Site",
        description:
          "Pagina oficial de la mision con informacion del equipo y del proyecto.",
        href: "https://mrz-sat.unah.edu.hn/english/",
        source: "Proyecto Morazan / UNAH",
        kind: "official",
      },
    ],
  },
  {
    title: "Charlas, Divulgacion y Perfiles",
    iconKind: "outreach",
    links: [
      {
        title: "Purdue TicoTalk Event",
        description:
          "Publicacion de evento en BoilerLink con participacion de Moacir Fonseca Becker.",
        href: "https://boilerlink.purdue.edu/event/11509502",
        source: "Purdue BoilerLink",
        kind: "outreach",
      },
      {
        title: "Educational Outreach: Colegio Cientifico de San Vito",
        description:
          "Publicacion de divulgacion para estudiantes de secundaria sobre trayectorias en aeroespacial.",
        href: "https://www.facebook.com/CCCRSV/posts/el-joven-moacir-fonseca-becker-es-estudiante-de-posgrado-de-ingenier%C3%ADa-aeroespac/711624457433119/",
        source: "Facebook",
        kind: "outreach",
      },
      {
        title: "Google Scholar Profile",
        description:
          "Perfil academico con citas y trayectoria de investigacion.",
        href: "https://scholar.google.com/citations?hl=en&user=wc3XeSoAAAAJ",
        source: "Google Scholar",
        kind: "profile",
      },
      {
        title: "Official Personal Site",
        description: "Sitio personal principal y portafolio.",
        href: "https://moacir.space/",
        source: "moacir.space",
        kind: "profile",
      },
    ],
  },
];
