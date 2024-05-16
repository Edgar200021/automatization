'use client'

import { addEmployee } from '@/actions '
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { Collapsible } from '../Collapsible/Collapsible'
import { Button } from '../ui/Button'

interface Props {
  onClose?: () => void
  userEmail: string
}

export const AddEmployeeForm = ({ onClose, userEmail }: Props) => {
  const [state, action] = useFormState(addEmployee.bind(null, userEmail), {})

  useEffect(() => {
    if (!onClose) return
    if (state.status === 'done') {
      onClose?.()
    }
  }, [onClose, state.status])

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-2 py-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Ավելացնել աշխատակից
        </h2>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action={action} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Անուն Ազգանուն
            </label>
            <div className="mt-2">
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
            <Collapsible collapsed={!!state.fullName?.trim()}>
              <span className="text-red-500">{state.fullName}</span>
            </Collapsible>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Էլ.հասցե
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
            <Collapsible collapsed={!!state.email?.trim()}>
              <span className="text-red-500">{state.email}</span>
            </Collapsible>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="department"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Բաժին
              </label>
            </div>
            <div className="mt-2">
              <input
                id="department"
                name="department"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
            <Collapsible collapsed={!!state.department?.trim()}>
              <span className="text-red-500">{state.department}</span>
            </Collapsible>
          </div>

          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Պաշտոն
            </label>
            <div className="mt-2">
              <input
                id="position"
                name="position"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
            <Collapsible collapsed={!!state.position?.trim()}>
              <span className="text-red-500">{state.position}</span>
            </Collapsible>
          </div>

          <div>
            <label
              htmlFor="dailySalary"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Օրական աշխատավարձ
            </label>
            <div className="mt-2">
              <input
                id="position"
                name="dailySalary"
                type="number"
                pattern="[0-9]*"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
            <Collapsible collapsed={!!state.dailySalary?.trim()}>
              <span className="text-red-500">{state.dailySalary}</span>
            </Collapsible>
          </div>

          <div>
            <Button
              variant="clear"
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ավելացնել
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
