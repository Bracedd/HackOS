import Image from 'next/image' // Use Image component for optimization

export default function Menubar() {
  const time = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })

  return (
    <div className="menubar">
      <div className="flex items-center gap-2">
        {/* Use Image component for optimization */}
        <Image src="/icon-hc.png" alt="icon" width={21} height={21} />
        <span className="font-bold gap-5 text-lg">Home</span>
      </div>
      <div className="font-bold text-lg font-sans">
        {time}
      </div>
    </div>
  )
}
