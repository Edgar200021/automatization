'use client'

import { updateEmployee } from '@/actions /updateEmployee'
import { useSession } from 'next-auth/react'
import { Button } from '../ui/Button'

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
      <Button
        type="submit"
        disabled={disabled}
        variant="clear"
        className="w-5 h-5 border-[1px] border-black flex items-center justify-center disabled:cursor-not-allowed cursor-pointer"
        withSpinner={true}
      >
        {checked && <span>&#10003;</span>}
      </Button>
    </form>
  )
}
