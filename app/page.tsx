'use client'

import { useState } from 'react'
import Menubar from '../components/Menubar'
import Dock from '../components/Dock'
import Window from '../components/Window'
import Image from 'next/image'

export default function Desktop() {
  const [windows, setWindows] = useState<Array<{ id: string; title: string; content: React.ReactNode; position: { x: number; y: number } }>>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)

  // Function to open a new window
  const openWindow = (title: string, content: React.ReactNode) => {
    const id = `window-${Date.now()}`

    // Calculate the center of the screen for the window
    const centerX = (window.innerWidth - 800) / 2;
    const centerY = (window.innerHeight - 600) / 2;

    setWindows([...windows, { id, title, content, position: { x: centerX, y: centerY } }])
    setActiveWindow(id)
  }

  // Function to close a window
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
            top: `${window.position.y}px`,
            left: `${window.position.x}px`,
            zIndex: activeWindow === window.id ? 50 : index + 1,
            position: 'absolute',
          }}
        >
          {window.content}
        </Window>
      ))}

      <Dock onOpenWindow={openWindow} />
    </main>
  )
}
