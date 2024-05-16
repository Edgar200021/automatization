'use client'

import { deleteEmployee } from '@/actions /deleteEmployee'
import { useSession } from 'next-auth/react'
import { Button } from '../ui/Button'
import { CloseIcon } from '../ui/CloseIcon'
import { useFormStatus } from 'react-dom'

interface Props {
  employeeEmail: string
}

export const DeleteEmployeeForm = ({ employeeEmail }: Props) => {
  const { data } = useSession()
  const {pending} = useFormStatus()
  return (
    <form action={deleteEmployee.bind(null, data!.user!.email!, employeeEmail)}>
      <Button disabled={pending} className="bg-red-300 rounded-xl p-1 cursor-pointer " variant="clear">
        <CloseIcon />
      </Button>
    </form>
  )
}
