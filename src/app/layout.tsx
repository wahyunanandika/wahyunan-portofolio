import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wahyunan Andika - Junior Researcher',
  description: 'Portofolio of Wahyunan Andika - Photogrammetry, 3D Vision and Geospatial Research'
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>  
    </html>
  )
}