'use client'

import { updateEmployee } from '@/actions /updateEmployee'
import { useSession } from 'next-auth/react'

interface Props {
  employeeEmail: string
  checked: boolean
  disabled: boolean
}

export const UpdateEmployeeForm = ({
  employeeEmail,
  checked,
  disabled,
}: Props) => {
  const { data } = useSession()

  return (
    <form action={updateEmployee.bind(null, data!.user!.email!, employeeEmail)}>
      <button
        disabled={disabled}
        className="w-5 h-5 border-[1px] border-black flex items-center justify-center disabled:cursor-not-allowed cursor-pointer"
      >
        {checked && <span>&#10003;</span>}
      </button>
    </form>
  )
}
