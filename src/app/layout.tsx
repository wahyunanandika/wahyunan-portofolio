import type { Metadata } from 'next'
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource-variable/archivo/wdth-italic.css'
import '@fontsource/ibm-plex-mono/400.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wahyunan Andika, research and geospatial engineer',
  description:
    'Portfolio of Wahyunan Andika: 3D vision, computer vision and GIS. Gaussian Splatting to 3D Tiles, world-scale AR and geospatial pipelines.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
