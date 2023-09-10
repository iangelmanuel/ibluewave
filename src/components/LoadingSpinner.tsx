import { Spinner } from '@nextui-org/spinner'

export default function LoadingSpinner () {
  return (
    <div className="flex justify-center items-start lg:items-center min-h-screen">
    <Spinner
      size="lg"
      label="Cargando..."
      labelColor="foreground"
      color="primary"
    />
  </div>
  )
}
