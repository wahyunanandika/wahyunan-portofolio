export const profile = {
  name: 'Wahyunan Andika',
  handle: 'wahyunan',
  title: 'Junior Researcher · Photogrammetry & 3D Vision',
  huggingface: 'https://huggingface.co/wahyunan',
  github: 'https://github.com/wahyunanandika',
}

export const experience = [
  {
    year: 'April 2025 – Present',
    role: 'Junior Researcher',
    place: 'Bandung, Indonesia',
    desc: 'Penelitian di bidang rekonstruksi 3D, computer vision berbasis drone, dan segmentasi objek dari citra udara.',
    active: true,
  },
  {
    year: 'August 2023 – December 2023',
    role: 'Data Analyst — Methane Dispersion',
    place: 'Jogjakarta, Indonesia',
    desc: 'Analisis dan pemodelan dispersi metana di unit refinery menggunakan pendekatan statistik.',
    active: false,
  },
  {
    year: 'August 2023 – December 2023',
    role: 'Freelance Offshore Surveyor',
    place: 'Jakarta, Indonesia',
    desc: 'Survei lepas pantai untuk proyek inspection, maintenance and repair platform dan pipeline.',
    active: false,
  },
  {
    year: 'October 2019 – October 2022',
    role: 'Hydrographic & Offshore Surveyor',
    place: 'Jakarta, Indonesia',
    desc: 'Survei hidrografi dan geofisika lepas pantai dengan fokus utama proyek inspection, maintenance and repair platform dan pipeline. Akuisisi dan pengolahan data batimetri dan sub-bottom profiler.',
    active: false,
  },
]

export const projects = [
  {
    type: '3D Vision · Photogrammetry',
    name: 'Orthophoto Inference',
    desc: 'Pipeline inferensi untuk analisis orthofoto hasil drone.',
    tags: ['Python', 'Computer Vision', 'Drone'],
    link: 'https://huggingface.co/spaces/wahyunan/inferences_orthophoto',
  },
  {
    type: 'Building Detection · GIS',
    name: 'RF & Building Regularization',
    desc: 'Model deteksi footprint bangunan dari citra satelit dengan teknik regularisasi geometri.',
    tags: ['YOLOv8', 'GIS', 'Segmentation'],
    link: 'https://huggingface.co/spaces/wahyunan/inferences_RF_and_Regularize_building',
  },
  {
    type: 'Material Classification',
    name: 'Genteng Tanah Liat Classifier',
    desc: 'Klasifikasi material atap genteng tanah liat dari citra udara.',
    tags: ['Classification', 'Remote Sensing', 'PyTorch'],
    link: 'https://huggingface.co/spaces/wahyunan/genteng_tanah_liat',
  },
  {
    type: 'Energy · Computer Vision',
    name: 'Solar Panel Fault Detection',
    desc: 'Deteksi panel surya rusak dari citra drone menggunakan bounding box detection.',
    tags: ['YOLOv8', 'Inspection', 'Energy'],
    link: 'https://huggingface.co/spaces/wahyunan/simple_solar_panel_faulty',
  },
  {
    type: 'Computer Vision · Safety',
    name: 'Dilans Obstacle Detection',
    desc: 'Deteksi obstacle real-time untuk aplikasi navigasi otonom.',
    tags: ['YOLOv8', 'Detection', 'Real-time'],
    link: 'https://huggingface.co/spaces/wahyunan/dilans_obstacle',
  },
  {
    type: 'Geometry Processing',
    name: 'Simplification & Smoothing',
    desc: 'Simplifikasi dan smoothing geometri polygon untuk hasil segmentasi bangunan.',
    tags: ['Geometry', 'PostProcessing', 'Python'],
    link: 'https://huggingface.co/spaces/wahyunan/inference_simplication_smoothing',
  },
]

export const skills = [
  {
    cat: 'Domain Expertise',
    items: ['Photogrammetry', '3D Reconstruction', 'GIS & Geospatial', 'Hydrographic Survey'],
  },
  {
    cat: 'AI / ML',
    items: ['Instance Segmentation', 'Object Detection', 'PyTorch', 'Hugging Face'],
  },
  {
    cat: 'Programming',
    items: ['Python', 'OpenCV', 'NumPy / Pandas', 'C++'],
  },
  {
    cat: 'Tools',
    items: ['Agisoft Metashape', 'QGIS', 'Docker', 'Git'],
  },
]