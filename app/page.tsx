'use client'

import { useState } from 'react'
import Menubar from '../components/Menubar'
import Dock from '../components/Dock'
import Window from '../components/Window'
import Image from 'next/image'

export default function Desktop() {
  const [windows, setWindows] = useState<Array<{ id: string; title: string; content: React.ReactNode }>>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)

  const openWindow = (title: string, content: React.ReactNode) => {
    const id = `window-${Date.now()}`
    setWindows([...windows, { id, title, content }])
    setActiveWindow(id)
  }

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id))
    if (activeWindow === id) {
      setActiveWindow(null)
    }
  }

  return (
    <main className="h-screen w-screen bg-[#6C63FF] overflow-hidden">
      <Menubar />
      
      <div className="flex items-center justify-center h-full">
        <Image
          src="/hack-club-flag.svg"
          alt="Hack Club Flag"
          width={600}
          height={200}
          className="select-none pointer-events-none"
          
        />
      </div>

      {windows.map((window, index) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          isActive={activeWindow === window.id}
          onClose={() => closeWindow(window.id)}
          onFocus={() => setActiveWindow(window.id)}
          style={{
            top: `${100 + index * 30}px`,
            left: `${100 + index * 30}px`,
            zIndex: activeWindow === window.id ? 50 : index + 1
          }}
        >
          {window.content}
        </Window>
      ))}

      <Dock onOpenWindow={openWindow} />
    </main>
  )
}

