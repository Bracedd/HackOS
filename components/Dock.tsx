import { FaCompass, FaFileAlt, FaUsers, FaShareAlt } from 'react-icons/fa'
import React from 'react'; 
import HighSeasApp from './apps/HighSeasApp'
import LogbookApp from './apps/LogBookApp'
import CommunityApp from './apps/CommunityApp'
import ShareApp from './apps/ShareApp'

interface DockProps {
  onOpenWindow: (title: string, content: React.ReactNode) => void
}

type IconName = 'compass' | 'docs' | 'community' | 'share'; // Valid icon names

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

  // Map icon names to Font Awesome icons
  const iconMapping: Record<IconName, React.ElementType> = {
    compass: FaCompass,
    docs: FaFileAlt,
    community: FaUsers,
    share: FaShareAlt
  };

  return (
    <div className="dock">
      {apps.map((app) => (
        <button
          key={app.title}
          className="dock-icon"
          onClick={() => onOpenWindow(app.title, app.component)}
        >
          {React.createElement(iconMapping[app.icon], { size: 32 })} {/* Use the mapped Font Awesome icon */}
        </button>
      ))}
    </div>
  )
}
