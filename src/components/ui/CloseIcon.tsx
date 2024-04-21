import { cn } from '@/utils/cn'
interface Props {
  className?: string
}

export const CloseIcon = ({ className }: Props) => {
  return (
    <span
      className={cn(
        'size-4 block relative before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:content-[""] before:w-full before:block before:h-px before:bg-black before:rotate-45  after:absolute after:block after:content-[""] after:top-[50%] after:translate-y-[-50% after:left-0 after:w-full after:h-px after:bg-black after:-rotate-45',
        className
      )}
    ></span>
  )
}
