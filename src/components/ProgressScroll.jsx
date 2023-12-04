import { useEffect, useState } from 'react'

const ProgressScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const calculateScrollProgress = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY
    const scrollHeight = documentHeight - windowHeight
    const scrollProgress = (scrollTop / scrollHeight) * 100

    setScrollProgress(scrollProgress)
  }

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollProgress)

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress)
    }
  }, [])

  return (
    <>
      <div
        className="scrollProgressBar"
        style={{
          width: `${scrollProgress.toFixed(2)}%`,
          height: '4px',
          borderRadius: '2px',
          backgroundColor: '#91b7d9',
          position: 'absolute',
          bottom: 0,
        }}
      ></div>
    </>
  )
}

export default ProgressScroll
