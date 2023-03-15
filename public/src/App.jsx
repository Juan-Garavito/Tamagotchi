import { CircleLoading } from '../Components/CircleLoading.jsx'

export function App () {
  return (
    <>
      <CircleLoading attribute='Sueño' time={1000} index={0} />
      <CircleLoading attribute='Hambre' time={2000} index={1} />
      <CircleLoading attribute='Felicidad' time={4000} index={2} />
    </>
  )
}
