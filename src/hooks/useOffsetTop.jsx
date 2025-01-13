import { useRef, useState, useEffect } from "react"

const useOffsetTop = () => {
  const ref = useRef()
  const [offsetTop, setOffsetTop] = useState(0)

  useEffect(() => {
    const updateOffset = () => {
      if (ref.current) {
        const newOffset = 
          ref.current.getBoundingClientRect().top + 
          document.documentElement.scrollTop
        setOffsetTop(newOffset)
      }
    }

    updateOffset()
    window.addEventListener('resize', updateOffset)
    window.addEventListener('scroll', updateOffset)

    return () => {
      window.removeEventListener('resize', updateOffset)
      window.removeEventListener('scroll', updateOffset)
    }
  }, [])

  return [ref, offsetTop]
}

export default useOffsetTop
