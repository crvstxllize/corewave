// src/app/layout.tsx
import '../styles/reset.css'
import '../styles/vars.css'
import '../styles/global.css'
import { montserrat } from './fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  )
}
