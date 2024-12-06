import Icon from '@hackclub/icons'
import HighSeasApp from './apps/HighSeasApp'
import LogbookApp from './apps/LogBookApp'
import CommunityApp from './apps/CommunityApp'
import ShareApp from './apps/ShareApp'

interface DockProps {
  onOpenWindow: (title: string, content: React.ReactNode) => void
}

interface AppIcon {
  icon: keyof typeof Icon.glyphs
  title: string
  component: React.ReactNode
}

export default function Dock({ onOpenWindow }: DockProps) {
  const apps: AppIcon[] = [
    { 
      icon: 'compass',
      title: 'High Seas',
      component: <HighSeasApp />
    },
    { 
      icon: 'docs',
      title: 'Logbook',
      component: <LogbookApp />
    },
    { 
      icon: 'community',
      title: 'Community',
      component: <CommunityApp />
    },
    { 
      icon: 'share',
      title: 'Share',
      component: <ShareApp />
    }
  ]

  return (
    <div className="dock">
      {apps.map((app) => (
        <button
          key={app.icon}
          className="dock-icon"
          onClick={() => onOpenWindow(app.title, app.component)}
        >
          <Icon glyph={app.icon} size={32} />
        </button>
      ))}
    </div>
  )
}

