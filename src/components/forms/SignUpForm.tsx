'use client'

import { signUp } from '@/actions '
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { Collapsible } from '../Collapsible/Collapsible'
import { Button } from '../ui/Button'

export const SIgnUpForm = () => {
  const [state, action] = useFormState(signUp, {})

  return (
    <>
      <div>
        <form action={action}>
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
                  type="email"
                  autoComplete="email"
                  name="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                />
              </div>
              <Collapsible collapsed={!!state.email?.trim()}>
                <span className="text-red-500">{state.email}</span>
              </Collapsible>
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Անուն ազգանուն
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  type="text"
                  autoComplete="email"
                  name="fullName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                />
              </div>
              <Collapsible collapsed={!!state.fullName?.trim()}>
                <span className="text-red-500">{state.fullName}</span>
              </Collapsible>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ընկերության անվանումը
              </label>
              <div className="mt-2">
                <input
                  id="companyName"
                  type="text"
                  name="companyName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                />
              </div>
              <Collapsible collapsed={!!state.companyName?.trim()}>
                <span className="text-red-500">{state.companyName}</span>
              </Collapsible>
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
                  type="password"
                  name="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                />
              </div>
              <Collapsible collapsed={!!state.password?.trim()}>
                <span className="text-red-500">{state.password}</span>
              </Collapsible>
            </div>

            <div>
              <label
                htmlFor="passwordConfirm"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Հաստատեք գաղտնաբառը
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="passwordConfirm"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                />
              </div>
              <Collapsible collapsed={!!state.passwordConfirm?.trim()}>
                <span className="text-red-500">{state.passwordConfirm}</span>
              </Collapsible>
            </div>

            <div className="">
              <div className="text-sm leading-6 flex flex-col gap-y-3">
                <Link
                  href="/sign-in"
                  className="font-semibold text-dark  hover:text-indigo-500"
                >
                  Արդեն գրանցվա՞ծ եք, մուտք գործել
                </Link>
                <Collapsible collapsed={!!state.message?.trim()}>
                  <span className="text-red-500">{state.message}</span>
                </Collapsible>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="shadow-sm text-sm p-3  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Գրանցվել
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}
