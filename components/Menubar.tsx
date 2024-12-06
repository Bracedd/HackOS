import Icon from '@hackclub/icons'

export default function Menubar() {
  const time = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })

  return (
    <div className="menubar">
      <div className="flex items-center gap-2">
        <img src="/icon-hc.png" alt="icon" width={21}/>
        <span className="font-bold gap-5 text-lg">Home</span>
      </div>
      <div className="font-bold text-lg font-sans">
        {time}
      </div>
    </div>
  )
}

