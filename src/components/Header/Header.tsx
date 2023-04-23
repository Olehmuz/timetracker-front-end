import classNames from 'classnames';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth';
import { useAppDispatch } from '../../hooks/index';

import { logout } from 'utils/redux/slices/authSlice';

import 'react-calendar/dist/Calendar.css';
import './../../assets/css/components/Calendar.scss'

const navigation = [
  { name: 'My tracker', href: '/', current: false },
  { name: 'Crew', href: '/crew', current: false },
]

export default function Header() {
	const { user } = useAuth();

	const dispatch = useAppDispatch()

	const logoutHeader = () => {
		dispatch(logout());
		console.log('logout');
	}

	const userNavigation = [
		{ name: 'Your Profile', href: '/profile', },
	]
	  
  return (
        <Disclosure as="nav" className="bg-white-800 container mx-auto">
          {({ open }) => (
            <>
              <div className="mx-auto">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <Link to='/about'>
					<div className="flex-shrink-0 ">
                      <img
                        className="h-8"
                        src="/keen.png"
                        alt="Your Company"
                      />
                    </div>
					</Link>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-black'
                                : 'text-primary-gray hover:bg-light-gray',
                              'rounded-md px-3 py-2 text-sm font-semibold leading-5 uppercase'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm transition hover:ease-linear hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-primary-gray">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.picture} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                           <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item disabled>
								<div className='block px-4 py-2 text-sm text-primary-gray'>{user.name} {user.surname}</div>
							</Menu.Item>
							{userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.href}
                                    className={classNames(
                                      active ? 'hover:bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-primary-gray'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                              <Menu.Item>
                                {({ active }) => (
                                  <div
									onClick={logoutHeader}
                                    className={classNames(
                                      active ? 'hover:bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-primary-gray'
                                    )}
                                  >
									Sign out
                                  </div>
                                )}
                              </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.picture} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name} {user.surname}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
				  	<Disclosure.Button
						disabled
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {`${user.name} ${user.surname}`}
                    </Disclosure.Button>
					<Disclosure.Button
						
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {`Your Profile`}
                    </Disclosure.Button>
					<Disclosure.Button
						onClick={logoutHeader}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        {`Sign out`}
                    </Disclosure.Button>
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

  )
}
