// src/app/(main)/layout.tsx
import { ReactNode } from 'react'
import MainHeader from '../../components/layouts/header/main/header'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  )
}
