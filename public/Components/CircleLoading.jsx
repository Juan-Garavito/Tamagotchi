import { useEffect, useState } from 'react'

export function CircleLoading ({ attribute, time, index }) {
  const [radius, setRadius] = useState(52)

  useEffect(() => {
    const circleCenter = document.querySelectorAll('.circle-center')[index]
    console.log(circleCenter)
    if (radius >= 0) {
      const interval = setInterval(() => {
        setRadius(radius - 2)
        circleCenter.style.width = `${radius}px`
        circleCenter.style.height = `${radius}px`
      }, time)

      return () => clearInterval(interval)
    }
  }, [radius])

  return (
    <>
      <div className='circle'>
        <div className='circle-center' />
      </div>
      <p>{attribute}</p>
    </>
  )
}
