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
      "Estimated Gateway state in NRHO using only Moon-horizon imagery with CR3BP dynamics, reducing dependence on ground tracking.",
    highlights: [
      "Built a synthetic imaging pipeline with limb detection and conic fitting for navigation measurements.",
      "Implemented Christian-Robinson OPNAV with EKF/UKF filtering.",
      "Achieved km-level position and m/s-level velocity accuracy in cislunar multi-body regimes.",
    ],
    note: "Completed as part of AAE590 PET (2025) at Purdue University.",
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
      "Designed a distributed estimation-and-control framework for cooperative rendezvous with large debris under J2-perturbed dynamics.",
    highlights: [
      "Developed distributed EKF with Metropolis consensus for a 10-spacecraft Envisat case study.",
      "Achieved network-wide convergence in 11 iterations with 0.33 m position and 0.006 m/s velocity mean errors.",
      "Implemented PD guidance enabling meter-level rendezvous in 600 s with ΔV below 50 m/s per agent.",
    ],
    note: "Completed as part of AAE590 MAAC (2024) at Purdue University.",
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
      "Developed a convex MPC framework for direct transfers from Libration Point Orbits to targeted lunar surface landing sites.",
    highlights: [
      "Focused on precision landing scenarios near the lunar south pole.",
      "Implemented conditional collision constraints within a linearized CR3BP dynamics model.",
      "Demonstrated trajectory tracking and perturbation adaptation using state and control penalty tuning.",
    ],
    note: "Completed as part of AAE590 Advanced Control Applications (2024) at Purdue University.",
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
      "This project tackles orbital pursuit-evasion, where a spacecraft must capture a moving target in orbit while dealing with incomplete information.",
    highlights: [
      "Used Unscented Kalman Filter estimation for evader state and strategy inference.",
      "Compared complete-information, zero-sum, and UKF-informed control approaches.",
      "Modeled dynamics with Euler-Hill equations for realistic debris-like scenarios.",
    ],
    note: "Completed as part of Optimal Control and Estimation (AAE5980) at Purdue University.",
    video: { url: "https://youtu.be/qDNzvLLw9oo" },
  },
  {
    year: "2023",
    title:
      "Using Cycle-Consistent Adversarial Networks translation to color surface images of Mars",
    summary:
      "Machine learning project focused on translating Mars surface imagery into color representations using CycleGAN methods.",
    note: "Completed as part of Machine Learning (STAT598 / ECE595) at Purdue University.",
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
      "This project studied distributed machine learning in a system-of-systems context, modeled as collaborating AI companies with different data and network roles.",
    highlights: [
      "Analyzed the effect of topology and data diversity on model quality.",
      "Implemented a three-phase process: local training, parameter sharing, and aggregation.",
      "Observed links between node centrality and model accuracy variance.",
    ],
    note: "Completed as part of Systems of Systems (AAE56000) at Purdue University.",
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
      "Led planning, requirements, and technical coordination for a regional satellite effort across space and ground segments.",
    highlights: [
      "Coordinated internal and external stakeholders including JAXA and UNOOSA.",
      "Defined around 200 mission, system, and subsystem requirements.",
      "Implemented secure cloud documentation workflows and mentored subsystem teams.",
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
      "Developed during the ISU Space Studies Program (ESA sponsored), this mission concept addressed active debris removal with eco-design and concurrent engineering principles.",
    highlights: [
      "Developed a Phase-0 design for a robotic manipulator concept.",
      "Contributed CAD representations for station-level mission architecture.",
      "Led development of a feasible business case for sun-synchronous debris removal.",
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
      "After winning the 3rd UNOOSA DropTES cycle, this project executed robotics experiments under microgravity and rotation-induced gravity conditions at ZARM.",
    highlights: [
      "Led a multidisciplinary five-person team under strict technical and schedule constraints.",
      "Designed and ran a robotic-arm experiment at the Center of Applied Space Technology and Microgravity.",
      "Presented resulting dynamics analysis at the International Astronautical Congress in Adelaide.",
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
      "Designed, built, validated, and deployed an autonomous gas monitoring station for harsh volcanic environments.",
    highlights: [
      "System measured CO2, H2S, O2, H2, water vapor, temperature, and pressure.",
      "Combined solar and wind power for multi-year autonomous operation.",
      "Enabled telemetry over distances above 40 km.",
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
      "Airborne gas-monitoring platform tested at Kilauea with RF telemetry integration.",
    highlights: [
      "Designed PCB integration of CO2, SO2, and H2S sensors on STM32-F4.",
      "Built radiosonde telemetry chain using Arduino and iMet-1 RSB hardware.",
      "Validated stratospheric balloon deployment workflow for volcanic measurement.",
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
      "Project from the first all-Latin-American MDRS analog mission focused on robust rover locomotion concepts.",
    highlights: [
      "Designed, integrated, and tested the hexapod mechanical structure.",
      "Used iterative engineering optimization and additive manufacturing methods.",
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
      "Designed and programmed an ATmega-based in-flight control unit for volcanic research instrumentation.",
    highlights: [
      "Enabled manual and automatic operation of mass spectrometer subsystems.",
      "Integrated sensing for temperature, humidity, pressure, and airflow.",
      "Managed turbomolecular pump control and mission power distribution.",
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
      "Developed a multipurpose relay-output module for laboratory hydraulic and pneumatic systems with programmable automation.",
    highlights: [
      "Integrated LabVIEW user interface for setup and operation.",
      "Supported unattended multi-day autonomous operation.",
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
      "Designed a prototype remote-controlled car driven by EEG activity and blink-based input.",
    highlights: [
      "Processed real-time EEG with Fourier transforms for mental state detection.",
      "Implemented control logic for blink-triggered vehicle operation.",
      "Inspired assistive-technology spinoffs for children with physical disabilities.",
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
      "Participated in launching a scientific payload mission to measure atmospheric variables in Costa Rica.",
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
  { title: "2024 - Somos Purdue Award" },
  {
    title:
      "2023 - Selected Member for the first crew of the Student Analog Astronaut Training Program (Purdue SEARCH)",
    href: "https://www.linkedin.com/posts/moacirfb_satp-search-mars-activity-7088241964965326848-au9c?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "2020 - 5th KiboCube Round Winner (UNOOSA and JAXA)",
    href: "https://www.unoosa.org/oosa/en/informationfor/media/winner-of-5th-round-of-the-kibocube-programme-to-deploy-a-satellite-from-the-international-space-station-announced-and-opening-of-6th-round.html",
  },
  {
    title:
      "2018 - Tribute (graduation held in my honor) - Colegio Cientifico de Perez Zeledon",
  },
  {
    title:
      "2018 - Business Pitch Competition Winner, Business and Management Department (ISU)",
  },
  {
    title:
      "2017 - Finalist, Singularity University Costa Rica Global Impact Challenge",
  },
  {
    title: "2016 - 3rd Campaign Winner, UNOOSA DropTES Fellowship Program",
    href: "https://www.unoosa.org/oosa/en/ourwork/psa/hsti/capacity-building/droptes-third-cycle.html",
  },
  {
    title: "2014 - 1st Place at RobotiFest, National Robotics Contest",
    href: "https://www.ucr.ac.cr/noticias/2014/08/19/grandes-proyectos-salen-a-la-luz-en-robotifest-ucr.html",
  },
  {
    title:
      "2013 and 2014 - Academic Excellence Scholarship, University of Costa Rica",
  },
  {
    title:
      "2012 - US Department of State Scholarship Grantee, Global UGRAD Program",
    href: "https://issuu.com/worldlearning/docs/3._2012_-_2013_yearbook",
  },
  {
    title: "2012 and 2014 - 2nd and 3rd Place at National Robot Olympiad",
    href: "https://www.micit.go.cr/portaldos/index.php?option=com_content&view=article&id=6228:olimpiada-mundial-de-robotica-abre-las-puertas-a-talento-tico&catid=40&Itemid=1917",
  },
  {
    title:
      "2009 and 2010 - Honorific Mention XII and XIII Costa Rican Physics Olympiads",
    href: "https://www.perezzeledon.net/generalenos-se-preparan-para-olimpiada-iberoamericana-de-fisica/",
  },
  { title: "2010 - Math Olympiad Finalist" },
  {
    title:
      "2010 - Regional Science Fair Winner and National Science Fair Finalist",
  },
];

export const leadership: LeadershipItem[] = [
  {
    title: "2020 - Morazan Project, 1st Honduran satellite",
    background: [
      "Created initial work plans, organization models, and schedules for almost 40 students across project segments.",
      "Coordinated bi-weekly subteam meetings to track progress, provide guidance, and maintain delivery rhythm.",
    ],
  },
  {
    title:
      "2019 - Organizer of the 1st Central American Space Generation Workshop",
    background: [
      "Managed delegate communications, moderated meetings, invited speakers, coordinated sponsor support, and helped deliver a record participation of about 150 delegates.",
    ],
  },
  {
    title: "2016 - DropTES 3rd Round, research team coordinator",
    background: [
      "Proposed the microgravity experiment that won UNOOSA DropTES and coordinated team scope, schedule, and readiness constraints.",
    ],
  },
  {
    title: "2015 - Staff member of the 1st Costa Rican Rocketry Camp",
    background: [
      "Supported event organization, provided build guidance, and assisted attendees through model-rocketry activities.",
    ],
  },
  {
    title: "2012 - Robotics Group, University of Costa Rica",
    background: [
      "Co-founded the first robotics group at UCR to create shared space, mentorship, and infrastructure for student robotics projects.",
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
      "PhD Student in Aeronautics and Astronautics (2022 - Today)",
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
      "Business and Management Minor",
      "GPA: 4.0",
    ],
  },
  {
    institution: "University of Costa Rica",
    href: "https://www.ucr.ac.cr/",
    logoSrc: "/logos/ucr.png",
    logoAlt: "University of Costa Rica logo",
    programs: [
      "Mechanical Engineering (2011-2016)",
      "Minor in Electrical Engineering",
      "Class top 5% (2/42)",
    ],
  },
  {
    institution: "University of Minnesota",
    href: "https://twin-cities.umn.edu/",
    logoSrc: "/logos/minnesota.png",
    logoAlt: "University of Minnesota logo",
    programs: [
      "Mechanical Engineering (H2 2012)",
      "One semester abroad through a US Department of State scholarship",
    ],
  },
];

export const skillAreas: SkillArea[] = [
  {
    key: "software",
    label: "Software",
    shortLabel: "Software",
    description:
      "Programming, machine learning, and AI-assisted development using large language models and agentic workflows.",
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
      { label: "Details", href: "/publications/virtual-thrust-issfd-2026/" },
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
        label: "Details",
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
    title: "Podcasts and Interviews",
    iconKind: "podcast",
    links: [
      {
        title: "epiSTEMas Episode E061",
        description:
          "Podcast conversation about aerospace engineering and Central American participation in space.",
        href: "https://epistemaspod.podbean.com/e/moacir-fonseca-becker-ingenieria-mecanica-y-centroamerica-en-el-espacio/",
        source: "EpiSTEMas",
        kind: "podcast",
        previewImage: "https://i.ytimg.com/vi/oIhVfwIRsbI/hqdefault.jpg",
      },
      {
        title: "UNOOSA LEAD Youth Innovation Festival Panel",
        description:
          "Panel segment with the United Nations Office for Outer Space Affairs.",
        href: "https://www.youtube.com/watch?v=gW7j54dQGX0&t=970s",
        source: "YouTube / UNOOSA",
        kind: "video",
      },
      {
        title: "La Reaccion CR Interview",
        description: "Spanish-language media interview and discussion.",
        href: "https://www.youtube.com/watch?v=UKomvqgaHiU&t=402s",
        source: "YouTube",
        kind: "video",
      },
    ],
  },
  {
    title: "News and Feature Articles",
    iconKind: "news",
    links: [
      {
        title: "Innovative solutions abound at Moonshot Pitch Challenge",
        description: "Purdue highlights Sentinel Space’s first-place finish in the Moonshot category, with Moacir Fonseca Becker and Sidh Sikka.",
        href: "https://www.purdue.edu/newsroom/2026/Q3/innovative-solutions-abound-at-moonshot-pitch-challenge/",
        source: "Purdue News · September 2026",
        kind: "news",
      },
      {
        title: "How Kerbal Space Program Is Inspiring Real Mission Designs",
        description:
          "Feature story mentioning Moacir F. Becker in mission-design context.",
        href: "https://www.universetoday.com/articles/how-kerbal-space-program-is-inspiring-real-mission-designs",
        source: "Universe Today",
        kind: "news",
      },
      {
        title: "Robotifest Projects at UCR",
        description:
          "University article about robotics projects and competition outcomes.",
        href: "https://www.ucr.ac.cr/noticias/2014/8/19/grandes-proyectos-salen-a-la-luz-en-robotifest-ucr/imprimir.html?empotrar=true&ruta=https%3A%2F%2Fwww.ucr.ac.cr%2Fnoticias%2F2014%2F8%2F19%2Fgrandes-proyectos-salen-a-la-luz-en-robotifest-ucr.html",
        source: "Universidad de Costa Rica",
        kind: "news",
      },
      {
        title: "DropTES Third Cycle Overview",
        description:
          "Official overview of the third DropTES cycle and participating teams.",
        href: "https://www.unoosa.org/oosa/en/ourwork/psa/hsti/capacity-building/droptes-third-cycle.html",
        source: "UNOOSA",
        kind: "news",
      },
    ],
  },
  {
    title: "Official and Institutional Pages",
    iconKind: "official",
    links: [
      {
        title: "UNOOSA Hypergravity and Microgravity Webinar Track",
        description: "DropTES winner references with webinar materials.",
        href: "https://www.unoosa.org/oosa/en/ourwork/access2space4all/HMTrack_Webinars.html",
        source: "UNOOSA",
        kind: "official",
      },
      {
        title: "UNOOSA Awardees: Costa Rica TEC and UCR",
        description:
          "Institutional awardee listing for Costa Rica participants.",
        href: "https://www.unoosa.org/oosa/en/ourwork/access2space4all/awardees/costa_rica_tec_ucr.html",
        source: "UNOOSA",
        kind: "official",
      },
      {
        title: "UNOOSA Common Webinars",
        description: "Webinar index referencing DropTES and related media.",
        href: "https://www.unoosa.org/oosa/en/ourwork/access2space4all/Common_Webinars.html",
        source: "UNOOSA",
        kind: "official",
      },
      {
        title: "MRZ-SAT Project Site",
        description: "Official mission page with team and project information.",
        href: "https://mrz-sat.unah.edu.hn/english/",
        source: "Proyecto Morazan / UNAH",
        kind: "official",
      },
    ],
  },
  {
    title: "Talks, Outreach and Profiles",
    iconKind: "outreach",
    links: [
      {
        title: "Purdue TicoTalk Event",
        description:
          "BoilerLink event listing featuring Moacir Fonseca Becker.",
        href: "https://boilerlink.purdue.edu/event/11509502",
        source: "Purdue BoilerLink",
        kind: "outreach",
      },
      {
        title: "Educational Outreach: Colegio Cientifico de San Vito",
        description:
          "Outreach post for high-school students on aerospace pathways.",
        href: "https://www.facebook.com/CCCRSV/posts/el-joven-moacir-fonseca-becker-es-estudiante-de-posgrado-de-ingenier%C3%ADa-aeroespac/711624457433119/",
        source: "Facebook",
        kind: "outreach",
      },
      {
        title: "Google Scholar Profile",
        description: "Academic profile with citations and research record.",
        href: "https://scholar.google.com/citations?hl=en&user=wc3XeSoAAAAJ",
        source: "Google Scholar",
        kind: "profile",
      },
      {
        title: "Official Personal Site",
        description: "Primary personal website and portfolio.",
        href: "https://moacir.space/",
        source: "moacir.space",
        kind: "profile",
      },
    ],
  },
];
