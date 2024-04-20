import { ClipLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className="absolute inset-0 h-full w-full flex items-center justify-center  backdrop-blur">
      <ClipLoader
        color={'blue'}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
