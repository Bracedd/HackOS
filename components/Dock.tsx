import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faFileAlt, faUsers, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import HighSeasApp from './apps/HighSeasApp'
import LogbookApp from './apps/LogBookApp'
import CommunityApp from './apps/CommunityApp'
import ShareApp from './apps/ShareApp'

interface DockProps {
  onOpenWindow: (title: string, content: React.ReactNode) => void;
}

type IconName = "compass" | "docs" | "community" | "share"; // Valid icon names

interface AppIcon {
  icon: IconName;
  title: string;
  component: React.ReactNode;
}

const iconMap = {
  compass: faCompass,
  docs: faFileAlt,
  community: faUsers,
  share: faShareAlt,
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
          key={app.title}
          className="dock-icon"
          onClick={() => onOpenWindow(app.title, app.component)}
        >
          <FontAwesomeIcon icon={iconMap[app.icon]} size="2x" />
        </button>
      ))}
    </div>
  )
}
