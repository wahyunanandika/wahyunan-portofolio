export const profile = {
  name: 'Wahyunan Andika',
  handle: 'wahyunan',
  title: 'Research and geospatial engineer',
  headline: 'I build pipelines that turn drone imagery, LiDAR and photos into georeferenced 3D data.',
  summary:
    'My work sits between computer vision, 3D vision and GIS: Gaussian Splatting scenes delivered as 3D Tiles, detection and segmentation models, spatial databases, and world-scale AR for field inspection. Before that I spent 3.5 years as an offshore surveyor, which is where I learned to care about GNSS, coordinate reference systems and error budgets.',
  tags: ['3D Gaussian Splatting', 'Photogrammetry', 'GIS', 'Computer Vision', 'Augmented Reality', 'Python'],
  email: 'wahyunan.andikaa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/wahyunan-andika-133484268',
  huggingface: 'https://huggingface.co/wahyunan',
  github: 'https://github.com/wahyunanandika',
}

export type Link = { label: string; url: string }

export type FeaturedProject = {
  id: string
  place: string
  coords: [number, number]
  year: string
  type: string
  name: string
  desc: string
  highlights: string[]
  results?: { label: string; value: string }[]
  note?: string
  tags: string[]
  links: Link[]
  status?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'gaussian-splatting-3d-tiles',
    place: 'Bandung, Cimahi and Jatinangor',
    coords: [-6.89, 107.61],
    year: '2026',
    type: '3D vision, geospatial',
    name: 'Georeferenced Gaussian Splatting to 3D Tiles',
    desc:
      'A Python pipeline that places 3D Gaussian Splatting scenes on the globe and exports them as OGC 3D Tiles 1.1 with SPZ-compressed splats, viewable in CesiumJS, Cesium ion and ArcGIS Pro.',
    highlights: [
      'Two georeferencing modes: a known-coordinate origin (e.g. a benchmark), or a RANSAC-Umeyama similarity solve from COLMAP camera centres to PPK GNSS camera positions.',
      'Octree tiling so Cesium streams large scenes progressively instead of loading one huge tile.',
      'Georeferencing is kept in the tileset root transform, so splat coordinates stay local and float32-safe.',
      'Pure-Python SPZ v3 encoder, WGS84 and UTM camera inputs, optional EGM96/EGM2008 geoid correction and .3tz packaging.',
    ],
    results: [
      { label: 'Taman Kota Cimahi', value: '5.0M splats, 341 PPK cameras, RMSE 0.076 m' },
      { label: 'ITB Ganesha, Bandung', value: '9.0M splats, 1,146 PPK cameras, RMSE 0.022 m' },
      { label: 'Jatinangor', value: '24.9M splats, 4,245 PPK cameras, RMSE 0.599 m' },
    ],
    note:
      'RMSE is the fit of the transform against PPK camera positions, not an independent checkpoint validation. Built on dozeri83/geo-register-plugin.',
    tags: ['Python', 'COLMAP', '3DGS', '3D Tiles', 'CesiumJS', 'ArcGIS Pro'],
    links: [
      { label: 'GitHub', url: 'https://github.com/wahyunanandika/3dtiles_georeference_3dgs' },
    ],
  },
  {
    id: 'ar-pipeline-inspection',
    place: 'Balikpapan, East Kalimantan',
    coords: [-1.25, 116.83],
    year: '2026',
    type: 'Augmented reality, GIS',
    name: 'World-Scale AR Pipeline Inspection',
    desc:
      'An Android AR proof of concept (Unity, AR Foundation, ARCore) that overlays georeferenced GIS pipeline meshes on the live camera feed for field inspection at an oil & gas facility.',
    highlights: [
      'Traced a transform-sync conflict inside the ArcGIS Maps SDK for Unity by decompiling it, then rebuilt the app without map SDKs so ARCore alone owns the camera pose.',
      'Plain C# georeferencing: one fixed site origin, GPS + compass calibration averaged over 10 s, pipes placed in a local East-North-Up frame.',
      'Field tools: multi-point distance measurement with per-segment precision, an excavation-style depth view of pipe elevation, attribute lookup and a live minimap.',
      'Data prepared in ArcGIS Pro: 2D pipeline shapefiles turned into 3D tube meshes with Densify, Buffer 3D and OBJ export.',
    ],
    results: [
      { label: 'Pipe length on mesh', value: 'error < 1 % (21.93 m reference)' },
      { label: 'Averaged compass heading', value: '6–9° off reference' },
      { label: 'Pipe → real object (AR)', value: '≈1.4 m vs. GPS tags, no RTK' },
    ],
    tags: ['Unity', 'C#', 'ARCore', 'ArcGIS Pro', 'GNSS'],
    links: [],
    status: 'Private repository',
  },
  {
    id: 'sidewalk-obstacle-geolocation',
    place: 'Semarang, Central Java',
    coords: [-6.99, 110.42],
    year: '2026',
    type: 'Computer vision, geolocation',
    name: 'Sidewalk Obstacle Geolocation from a Single Photo',
    desc:
      'Places sidewalk obstacles on a map from one smartphone photo and its EXIF (GPS and compass), without image sequences or special hardware.',
    highlights: [
      'Fine-tuned SegFormer-B0 for sidewalk segmentation and YOLO11s for 13 obstacle classes (mAP50 0.627).',
      'Apple Depth Pro metric depth, rescaled with a RANSAC ground plane and the measured camera height.',
      'Detections projected camera frame → ENU → WGS84, with magnetic-to-true heading correction from WMM2025.',
      '23 of 24 obstacles agree within 0.35 m between plane-based and depth-based positions.',
    ],
    tags: ['PyTorch', 'YOLO11', 'SegFormer', 'Depth Pro', 'Hugging Face'],
    links: [
      { label: 'GitHub', url: 'https://github.com/wahyunanandika/sidewalk-obstacle-geolocation' },
      { label: 'Model', url: 'https://huggingface.co/wahyunan/sidewalk-obstacle-geolocation' },
    ],
  },
  {
    id: '360-video-gaussian-splatting',
    place: 'Bandung, West Java',
    coords: [-6.90, 107.61],
    year: '2026',
    type: 'Photogrammetry, 3DGS',
    name: '360° Video to Gaussian Splatting: Data Preparation',
    desc:
      'Code accompanying an ISPRS 2026 paper on handheld LiDAR and 3DGS for pedestrian accessibility. Turns GoPro 360° recordings into geotagged frames ready for alignment in Metashape and 3DGS training.',
    highlights: [
      'Extracts GPS and orientation telemetry (GPMF) from GoPro .360 files.',
      'Frame extraction, optional split of each equirectangular frame into 8 perspective views.',
      'Optional trajectory smoothing (Savitzky–Golay, Kalman) before writing EXIF/XMP geotags.',
    ],
    tags: ['Python', 'Node.js', 'FFmpeg', 'Metashape', 'COLMAP'],
    links: [
      { label: 'GitHub', url: 'https://github.com/wahyunanandika/360-3dgs-georef' },
      { label: 'Paper', url: 'https://doi.org/10.5194/isprs-archives-XLIX-B2-2026-1117-2026' },
    ],
  },
]

// Work done at PT Inovasi Mandiri Pratama without a public repository
export const otherWork = [
  'LoD2 urban building models for Kota Cimahi and three districts of Kabupaten Bandung.',
  '3D Gaussian Splatting reconstructions for offshore platform inspection (Pertamina Hulu Mahakam).',
  'Gaussian Splatting and VR models of Sumur Bandung sidewalks with DILANS, so people with disabilities and the elderly can assess accessibility.',
  'TU Delft SUMS semantic mesh segmentation (roof, wall, ground) on large urban meshes, loaded into PostGIS and benchmarked for spatial query performance.',
  'Land-cover classification support with SAM-HQ and nDSM features, including geometry regularization and post-processing.',
]

export type SmallProject = {
  type: string
  name: string
  desc: string
  tags: string[]
  link: string
}

export const models: SmallProject[] = [
  {
    type: 'Building extraction',
    name: 'Building Footprints with Regularization',
    desc: 'Extracts building footprints from aerial imagery, then regularizes, simplifies and smooths the polygons so they are usable as GIS data.',
    tags: ['Segmentation', 'GIS', 'Python'],
    link: 'https://huggingface.co/spaces/wahyunan/inferences_RF_and_Regularize_building',
  },
  {
    type: 'Vegetation',
    name: 'Tree Crown Detection',
    desc: 'Tree crown delineation from aerial imagery with Detectree2.',
    tags: ['Detectree2', 'Instance segmentation'],
    link: 'https://huggingface.co/wahyunan/detectree2_inovamap',
  },
  {
    type: 'Inspection',
    name: 'Solar Panel Fault Detection',
    desc: 'Detects faulty solar panels in drone imagery.',
    tags: ['YOLOv8', 'Drone'],
    link: 'https://huggingface.co/spaces/wahyunan/simple_solar_panel_faulty',
  },
  {
    type: 'Remote sensing',
    name: 'Clay Roof Tile Classifier',
    desc: 'Classifies clay roof tile material from aerial imagery.',
    tags: ['Classification', 'PyTorch'],
    link: 'https://huggingface.co/spaces/wahyunan/genteng_tanah_liat',
  },
]

export const earlierProjects: SmallProject[] = [
  {
    type: 'Machine Learning · API',
    name: 'Loan Default Prediction API',
    desc: 'FastAPI service that returns a loan default prediction and probability from applicant inputs.',
    tags: ['FastAPI', 'scikit-learn'],
    link: 'https://github.com/wahyunanandika/local_creditrisk_streamlit',
  },
  {
    type: 'Machine Learning · Full Stack',
    name: 'NBA MVP Prediction',
    desc: 'MVP prediction models, with a Vue client and a JavaScript server for the web app.',
    tags: ['Python', 'Vue', 'Node.js'],
    link: 'https://github.com/wahyunanandika/NBAMVP_predictiom',
  },
  {
    type: 'Web GIS',
    name: 'Hotel Map Finder',
    desc: 'Flask web app that shows hotels on a Leaflet map and finds the five nearest to a selected location.',
    tags: ['Flask', 'Leaflet', 'OpenStreetMap'],
    link: 'https://github.com/wahyunanandika/webGIS_ML_Hotel',
  },
]

export const publications = [
  {
    authors:
      'Suwardhi, D., Andika, W., Widyastuti, R., Fadilah, W. A., Murtiyoso, A., Grussenmeyer, P., Remondino, F., and Helmy, F.',
    year: '2026',
    title:
      'Augmenting City Models with Handheld LiDAR and 3D Gaussian Splatting for Inclusive Pedestrian Infrastructure Assessment',
    venue: 'ISPRS Archives, XLIX-B2-2026, 1117–1124',
    doi: '10.5194/isprs-archives-XLIX-B2-2026-1117-2026',
  },
  {
    authors:
      'Suwardhi, D., Sudibyo, M. A., Ambarwari, A., Andika, W., Ihsan, M., Widyastuti, R., Fadilah, W. A., Murtiyoso, A., Grussenmeyer, P., and Remondino, F.',
    year: '2026',
    title: 'Bridging Semantic Mesh, CityGML, and Gaussian Splatting for Urban Modelling and Visualization',
    venue: 'ISPRS Archives, XLIX-B4-2026, 81–88',
    doi: '10.5194/isprs-archives-XLIX-B4-2026-81-2026',
  },
  {
    authors:
      'Suwardhi, D., Agustina, L. K., Andika, W., Widyastuti, R., Fadilah, W. A., Murtiyoso, A., and Remondino, F.',
    year: '2026',
    title:
      'Integrating Terrestrial Laser Scanning and 3D Gaussian Splatting for Heritage Building Documentation and Monitoring',
    venue: 'ISPRS Archives, XLVIII-2/W12-2026, 463–470',
    doi: '10.5194/isprs-archives-XLVIII-2-W12-2026-463-2026',
  },
]

export const experience = [
  {
    year: 'April 2025 – Present',
    role: 'Research Engineer / Geospatial Engineer',
    company: 'PT Inovasi Mandiri Pratama',
    place: 'Bandung, Indonesia',
    desc: 'Computer vision, 3D vision and AR prototypes for urban digital twin and industrial asset projects, from research to deployment.',
    points: [
      'Placed at Pertamina Hulu Mahakam as User IT: world-scale AR field-inspection POC, field-validated against survey ground truth.',
      'Gaussian Splatting to 3D Tiles pipeline for CesiumJS and ArcGIS Pro, tested on drone datasets of 5M–25M splats.',
      'LoD2 building models, semantic mesh segmentation into PostGIS, and sidewalk inspection with YOLO and SegFormer.',
    ],
    active: true,
  },
  {
    year: 'January 2025 – February 2025',
    role: 'Data Analyst & Mathematical Modeler',
    company: 'PT Ailesh',
    place: 'Yogyakarta, Indonesia',
    desc: 'Methane emission monitoring: dashboards, a data warehouse and ETL pipelines, plus atmospheric methane dispersion modeling with a Bayesian plume model.',
    points: [],
    active: false,
  },
  {
    year: 'August 2023 – December 2023',
    role: 'Offshore Surveyor — Inspection, Maintenance & Repair',
    company: 'PT Prajania Segara Utama',
    place: 'Jakarta, Indonesia',
    desc: 'Positioning support for IMR campaigns at Pertamina Hulu Energi ONWJ: underwater platform inspection, subsea pipeline inspection, pipeline leak repair and decommissioning.',
    points: [],
    active: false,
  },
  {
    year: 'October 2019 – October 2022',
    role: 'Offshore Surveyor — Inspection, Maintenance & Repair',
    company: 'PT Geotindo Survey Service',
    place: 'Jakarta, Indonesia',
    desc: 'Positioning and survey support for IMR campaigns at Pertamina Hulu Energi ONWJ, flexible pipeline laying (EPCI LLE–LLB, 2020) and an MBES/SBES pre-dredge survey for jetty construction.',
    points: [],
    active: false,
  },
]

export const education = [
  {
    year: '2019',
    title: 'Bachelor of Technology in Geomatics Engineering',
    place: 'Institut Teknologi Sepuluh Nopember, Surabaya',
    detail:
      'Thesis: Local geoid modelling of Surabaya using direct numerical integration, FFT and least-squares collocation.',
  },
  {
    year: '2023 – 2025',
    title: 'AI and Machine Learning Program',
    place: 'Pacmann, Jakarta',
    detail: '',
  },
  {
    year: '2022 – 2023',
    title: 'Full-Stack JavaScript Immersive Program',
    place: 'Hacktiv8, Jakarta',
    detail: '',
  },
]

export const skills = [
  {
    cat: '3D & Computer Vision',
    items: [
      'Structure from Motion (COLMAP, Metashape)',
      '3D Gaussian Splatting',
      'LiDAR & point clouds',
      'LoD1 / LoD2 building reconstruction',
      'Detection & segmentation (YOLO, SegFormer, SAM-HQ)',
      'AR (Unity, ARCore)',
    ],
  },
  {
    cat: 'GIS & Geospatial',
    items: [
      'ArcGIS Pro, QGIS',
      'PostGIS',
      'CityGML, 3D Tiles, CesiumJS',
      'CRS transformations & georeferencing',
      'GNSS & geoid models',
      'Remote sensing',
    ],
  },
  {
    cat: 'Data & ML',
    items: ['Python, SQL', 'PyTorch', 'Hugging Face', 'ETL', 'Mathematical modeling'],
  },
  {
    cat: 'Tools & Languages',
    items: ['Docker, FastAPI, Git', 'Unity (C#)', 'Indonesian (native)', 'English (TOEFL 550, B2)'],
  },
]
