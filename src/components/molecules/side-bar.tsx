'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { FileWarning, GitGraph, LayoutDashboard, LogOut, Settings } from 'lucide-react'
import { Button } from '../ui/button'
import SideItem from '../atoms/side-item'

export default function SideBar() {
    const navItems = [{
            label: 'Dashboard',
            path: '/management',
            icon: LayoutDashboard,
            comingSoon: false
          },
          {
            label: 'Alerts',
            path: '/alerts',
            icon: FileWarning,
            comingSoon: false},
          {
            label: 'Configurations',
            path: '/config',
            icon: Settings,
            comingSoon: false
          },]
  const path = usePathname()
  const [refresh, setRefresh] = useState(false)

  const handleNavigation = () => {
    setRefresh(!refresh)
  }

  return (
    <aside
      className={`flex  md:relative md:w-fit flex-col px-6 py-4 md:py-8 space-y-16 z-20`}
    >
      <section
        className={`flex flex-col h-full justify-between `}
      >
        <ul className={`flex flex-col space-y-4 overflow-y-auto`}>
          {navItems
            .map((item) => (
              <SideItem
                key={item.label}
                label={item.label}
                onClick={() => handleNavigation()}
                selected={path === item.path}
                path={item.path}
                icon={item.icon}
                comingSoon={item.comingSoon}
              />
            ))}
        </ul>

          <a href="/api/auth/logout">
            <Button variant={'outline'} className="rounded-md">
              <LogOut /> Terminar Sessão
            </Button>
          </a>

      </section>
    </aside>
  )
}