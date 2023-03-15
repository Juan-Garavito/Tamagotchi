import { useEffect, useState } from 'react'

export function CircleLoading ({ attribute, time, index }) {
  const [radius, setRadius] = useState(50)

  function reloadCircle () {
    const circleCenter = document.querySelectorAll('.circle-center')[index]
    const newRadius = (radius + 10) >= 50 ? 50 : radius + 10
    setRadius(newRadius)
    circleCenter.style.width = `${radius}px`
    circleCenter.style.height = `${radius}px`
  }

  useEffect(() => {
    const circleCenter = document.querySelectorAll('.circle-center')[index]
    console.log(circleCenter)

    if (radius >= 0) {
      const interval = setInterval(() => {
        setRadius(radius - 2)
      }, time)
      circleCenter.style.width = `${radius}px`
      circleCenter.style.height = `${radius}px`
      return () => clearInterval(interval)
    }
  }, [radius])

  return (
    <>
      <div onClick={reloadCircle} className='content-circle'>
        <div className='circle'>
          <div className='circle-center' />
        </div>
        <p>{attribute}</p>
      </div>
    </>
  )
}
