import { NAVIGATION } from '@/constants/const'
import Image from 'next/image'
import Link from 'next/link'
import { Logout } from '../Logout/Logout'
import logoIcon from '@/assets/icons/logo.svg'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Sidebar = () => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 h-full">
      <div className="flex h-16 shrink-0 items-center">
        <Image
          width={100}
          height={100}
          className="h-8 w-auto"
          src={logoIcon}
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {NAVIGATION.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <Image
                      alt=""
                      src={item.icon}
                      className={classNames(
                        item.current
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="-mx-6 mt-auto">
            <Logout />
          </li>
        </ul>
      </nav>
    </div>
  )
}
