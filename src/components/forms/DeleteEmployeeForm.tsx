'use client'

import { deleteEmployee } from '@/actions /deleteEmployee'
import { useSession } from 'next-auth/react'
import { Button } from '../ui/Button'
import { CloseIcon } from '../ui/CloseIcon'

interface Props {
  employeeEmail: string
}

export const DeleteEmployeeForm = ({ employeeEmail }: Props) => {
  const { data } = useSession()
  return (
    <form action={deleteEmployee.bind(null, data!.user!.email!, employeeEmail)}>
      <Button className="bg-red-300 rounded-xl p-1 " variant="clear">
        <CloseIcon />
      </Button>
    </form>
  )
}
