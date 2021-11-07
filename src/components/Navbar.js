import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, LocationMarkerIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
// import fi4rebaseConfig from "../config.js";

import React from 'react'
// import { Disclosure} from '@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'
/*Builds the navigation menu of each web page and diverts clicks to their respective webpages*/

var navigation = [
  { name: 'Dashboard', link: '/', current: true },
  { name: 'Charts', link: '/charts', current: false },
  // { name: 'Predictions', link: '/predictions', current: false },
  // { name: 'Lab Tests', link: '/labTest',current: false },
  // { name: 'Map', link: '/map',current: false },
]

var nodeLocation = [
  { location: 'St. Paul' },
  { location: 'Caranzalem' },
  // { name: 'Predictions', link: '/predictions', current: false },
  // { name: 'Lab Tests', link: '/labTest',current: false },
  // { name: 'Map', link: '/map',current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="font-roboto max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 sticky top-0 z-50">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 dark:focus:ring-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a
                    href="/"
                    className="text-2xl font-thin text-black dark:text-gray-300 lg:hidden h-8 w-auto"
                    alt="Saaf water">
                    <span class="text-2xl font-black text-indigo-600 dark:text-indigo-400">Saaf </span> water
                  </a>
                  <a
                    href="/"
                    className="text-3xl font-thin text-black dark:text-gray-300 hidden lg:block h-8 w-auto"
                    alt="Saaf water">
                    <span class="text-3xl font-black text-indigo-600 dark:text-indigo-400">Saaf </span> water
                  </a>
                  <div />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <ul classNames="list-none">
                        <li
                          key={item.name}
                          onClick={() => { window.location.pathname = item.link }}
                          className={classNames(
                            window.location.pathname === item.link ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-gray-300 dark:border-gray-700 cursor-pointer' : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200 ',
                            'px-3 py-2 rounded-md text-sm font-medium cursor-pointer'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button className=" p-1 rounded-full text-gray-500 dark:text-gray-600 hover:text-black dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 dark:focus:ring-offset-gray-800 focus:ring-gray-300 dark:focus:ring-gray-800">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>  */}

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="flex text-sm p-1 rounded-full text-gray-500 dark:text-gray-600 hover:text-black dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 dark:focus:ring-offset-gray-800 focus:ring-gray-300 dark:focus:ring-gray-800">
                          <span className="sr-only">Location</span>
                          <LocationMarkerIcon className="h-6 w-6" aria-hidden="true" />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-gray-300 dark:ring-gray-700 ring-opacity-5 focus:outline-none"
                        >
                          {nodeLocation.map((item) => (
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href={item.location}
                                  className={classNames(
                                    active ? 'bg-gray-100 dark:bg-gray-800' : '',
                                    'block px-4 py-2 text-sm text-gray-500 dark:text-400'
                                  )}
                                >
                                  {item.location}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <ul className="list-none">
                  <li
                    key={item.name}
                    onClick={() => { window.location.pathname = item.link }}
                    className={classNames(
                      window.location.pathname === item.link ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-gray-300 dark:border-gray-700' : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </li>
                </ul>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
