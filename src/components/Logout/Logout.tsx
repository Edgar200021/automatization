'use client'

import logoutIcon from '@/assets/icons/logout.svg'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { Button } from '../ui/Button'

export const Logout = () => {
  return (
    <Button
      className=" px-6 py-3"
      onClick={() => signOut({ callbackUrl: '/sign-in' })}
      variant="clear"
    >
      <Image width={20} height={20} src={logoutIcon} alt="Logout" />
    </Button>
  )
}
