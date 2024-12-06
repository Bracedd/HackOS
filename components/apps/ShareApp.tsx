'use client'

import { useState } from 'react'
import Icon from '@hackclub/icons'

export default function ShareApp() {
  const [copied, setCopied] = useState(false)
  
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/intent/tweet?text=Join%20me%20at%20the%20High%20Seas%20Hackathon!%20https://highseas.hackclub.com',
      icon: 'twitter'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hackclub/',
      icon: 'github'
    },
    {
      name: 'Slack',
      url: 'https://hackclub.com/slack',
      icon: 'slack'
    }
  ]

  const handleCopy = async () => {
    await navigator.clipboard.writeText('https://highseas.hackclub.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-4 space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-black-600">Share High Seas</h2>
        <p className="text-gray-600">Share the hackathon with your friends!</p>
      </div>

      <div className="flex gap-4">
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Icon glyph={link.icon} size={24} />
          </a>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value="https://highseas.hackclub.com"
            readOnly
            className="flex-1 p-2 bg-gray-100 rounded"
          />
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  )
}
