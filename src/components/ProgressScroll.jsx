import { useEffect, useState } from 'react'
import styles from '../App.module.css'

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
        className={styles.scrollProgressBar}
        style={{
          width: `${scrollProgress.toFixed(2)}%`,
        }}
      ></div>
    </>
  )
}

export default ProgressScroll
