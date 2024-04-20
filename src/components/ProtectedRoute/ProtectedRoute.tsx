'use client'
import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'
import { ClipLoader } from 'react-spinners'
import Navigate from '../Navigate/Navigate'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const session = useSession()

  if (session.status == 'loading')
    return (
      <div className="absolute inset-0 h-full w-full flex items-center justify-center  backdrop-blur">
        <ClipLoader
          color={'blue'}
          loading={session.status === 'loading'}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )


  return session.data?.user ? children : <Navigate to="/sign-in" />
}
