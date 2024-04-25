'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'
import { Collapsible } from '../Collapsible/Collapsible'
import { Button } from '../ui/Button'

export const SignInForm = () => {
  const searchParams = useSearchParams()
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.target as HTMLFormElement)

    await signIn('credentials', {
      redirect: true,
      callbackUrl: '/dashboard',
      email: form.get('email'),
      password: form.get('password'),
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset className="b-0 p-0 m-0 space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Էլ.փոստ
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Գաղտնաբառ
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
            />
          </div>
        </div>
        <Collapsible collapsed={!!searchParams.get('error')}>
          <span className="text-red-500">Սխալ Էլ․հասցե կամ գաղտնաբառ</span>
        </Collapsible>
        <div className="">
          <div className="text-sm leading-6 flex flex-col gap-y-3">
            <Link
              href="/sign-up"
              className="font-semibold text-dark  hover:text-indigo-500"
            >
              Գրանցվել
            </Link>
          </div>
        </div>
        <div>
          <Button
            type="submit"
            className="shadow-sm text-sm p-3  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Մուտք գործել
          </Button>
        </div>
      </fieldset>
    </form>
  )
}
