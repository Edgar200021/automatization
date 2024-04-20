import { SignInForm } from '@/components/forms/SignInForm'
import Image from 'next/image'
import { Suspense } from 'react'

export const revalidate = 0
export default function SignIn() {
  return (
    <div className="flex flex-1 min-h-[100svh]">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Մուտք
            </h2>
          </div>

          <div className="mt-10">
            <div>
              <Suspense>
                <SignInForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block bg-grad1">
        <Image
          fill
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  )
}
