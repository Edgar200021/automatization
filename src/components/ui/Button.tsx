'use client'
import { cn } from '@/utils/cn'
import { ComponentProps } from 'react'
import { useFormStatus } from 'react-dom'
import { ClipLoader } from 'react-spinners'

const variants = {
  primary:
    'block w-full min-w-[224px] p-3 block text-center rounded-xl text-white bg-black tracking-[.01rem] text-xl hover:bg-dark active:bg-red transition-colors duration-300 ease disabled:cursor-not-allowed',
  secondary:
    'block w-full min-w-[224px] p-3 block text-center rounded-xl text-black bg-white tracking-[.01rem] text-xl hover:bg-gray-200  active:bg-red active:text-white transition-colors duration-300 ease disabled:cursor-not-allowed',
  clear:
    'text-black hover:text-dark active:text-red text-xl transition-colors duration-300 ease disabled:cursor-not-allowed',
}
interface Props extends ComponentProps<'button'> {
  variant?: keyof typeof variants
  withSpinner?: boolean
}

export const Button = ({
  className,
  children,
  variant = 'primary',
  withSpinner,
  type,
  ...otherProps
}: Props) => {
  const { pending } = useFormStatus()


  if (type === 'submit' && withSpinner && pending)
    return <ClipLoader color="#000000" size={20} loading={pending} />

  return (
    <button
      disabled={type == 'submit' && pending}
      className={cn(variants[variant], className)}
      {...otherProps}
    >
      {type == 'submit' && pending ? 'Բեռնում...' : children}
    </button>
  )
}
