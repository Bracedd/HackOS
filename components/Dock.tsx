import Icon from '@hackclub/icons'
import HighSeasApp from './apps/HighSeasApp'
import LogbookApp from './apps/LogBookApp'
import CommunityApp from './apps/CommunityApp'
import ShareApp from './apps/ShareApp'

interface DockProps {
  onOpenWindow: (title: string, content: React.ReactNode) => void
}

type IconName = "compass" | "docs" | "community" | "share" | "search" | "ti"; // Add all the possible icon names here

interface AppIcon {
  icon: IconName; // Use the defined type for the icon
  title: string;
  component: React.ReactNode;
}

export default function Dock({ onOpenWindow }: DockProps) {
  const apps: AppIcon[] = [
    { 
      icon: 'compass', // This will now be recognized as a valid value
      title: 'High Seas',
      component: <HighSeasApp />
    },
    { 
      icon: 'docs', // This will now be recognized as a valid value
      title: 'Logbook',
      component: <LogbookApp />
    },
    { 
      icon: 'community', // This will now be recognized as a valid value
      title: 'Community',
      component: <CommunityApp />
    },
    { 
      icon: 'share', // This will now be recognized as a valid value
      title: 'Share',
      component: <ShareApp />
    }
  ]

  return (
    <div className="dock">
      {apps.map((app) => (
        <button
          key={app.title}
          className="dock-icon"
          onClick={() => onOpenWindow(app.title, app.component)}
        >
          <Icon glyph={app.icon} size={32} /> {/* Use the icon name in 'glyph' */}
        </button>
      ))}
    </div>
  )
}
