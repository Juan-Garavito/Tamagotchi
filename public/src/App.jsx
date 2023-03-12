import { CircleLoading } from '../Components/CircleLoading.jsx'

export function App () {
  return (
    <>
      <CircleLoading attribute='Circle1' time={1000} index={0} />
      <CircleLoading attribute='Circle2' time={2000} index={1} />
      <CircleLoading attribute='Circle3' time={4000} index={2} />
    </>
  )
}
