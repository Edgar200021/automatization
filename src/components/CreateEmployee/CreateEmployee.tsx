'use client'

import { useSession } from 'next-auth/react'
import { ClipLoader } from 'react-spinners'
import { Modal } from '../Modal/Modal'
import { AddEmployeeForm } from '../forms/AddEmployeeForm'

export const CreateEmployee = () => {
  const { data, status } = useSession()

  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Աշխատողներ
        </h1>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <Modal>
          <Modal.Open
            renderTrigger={fn => (
              <button
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => fn()}
              >
                Ավելացնել աշխատող
              </button>
            )}
          />
          <Modal.Content
            renderContent={closeFn => {
              if (status === 'loading')
                return (
                  <ClipLoader
                    color={'blue'}
                    loading={status === 'loading'}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                )
              return (
                <AddEmployeeForm
                  onClose={closeFn}
                  userEmail={data!.user!.email!}
                />
              )
            }}
          />
        </Modal>
      </div>
    </div>
  )
}
