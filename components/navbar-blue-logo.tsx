import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'
import { FaQuestionCircle, FaUserCircle, FaHandsHelping } from 'react-icons/fa'
import useStore, { setIsLoginOpen, setIsSignupOpen } from '~/stores/global'

const navigation = [
  { name: 'What is Owndr?', href: '/about', icon: '' },
  { name: 'FAQ', href: '/faq', icon: <FaQuestionCircle /> },
  {
    name: 'Empower the Community',
    href: '/',
    icon: <FaHandsHelping color="#fdd95e" />,
  },
]

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isLoginOpenHandler = useStore(setIsLoginOpen)
  const isSignupOpenHandler = useStore(setIsSignupOpen)

  return (
    <header>
      <nav
        className="mx-auto flex items-center px-8 lg:justify-between md:justify-between sm:justify-between xs:justify-between"
        aria-label="Global"
      >
        <div className="flex">
          <NavLink
            color="foreground"
            to="/"
            className="hover:opacity-40 duration-300"
          >
            <img
              src="/owndr-high-resolution-logo-transparent-cropped-blue.svg"
              alt="company-logo"
              width={100}
              height={100}
            />
          </NavLink>
          <div className="hidden lg:flex lg:pl-8 lg:gap-x-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="flex items-center gap-1 text-sm tracking-wider hover:opacity-40 duration-300"
              >
                {item.name}
                {item.icon}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex text-sm">
          <Button
            onPress={() => isLoginOpenHandler(true)}
            className="underline underline-offset-4 hover:opacity-40 duration-300"
          >
            Already have an account?
          </Button>
          <Button
            color="primary"
            onPress={() => isSignupOpenHandler(true)}
            className="flex items-center bg-transparent border border-[#ffafcc] text-[#ea598e] rounded-lg py-1 px-4 hover:opacity-40 duration-300"
          >
            <FaUserCircle />
            Sign up
          </Button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-md" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-6 py-6">
                <NavLink
                  color="foreground"
                  to="/"
                  className="hover:opacity-40 duration-300"
                >
                  <img
                    src="/owndr-high-resolution-logo-transparent-cropped-blue.svg"
                    alt="company-logo"
                    width={100}
                    height={100}
                  />
                </NavLink>
                <div>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-1 -mx-3 rounded-lg px-3 py-1 text-sm font-semibold leading-7 tracking-widest hover:bg-gray-50"
                    >
                      {item.name}
                      {item.icon}
                    </NavLink>
                  ))}
                </div>
                <div className="lg:hidden flex flex-col gap-4 pt-12 text-sm w-full">
                  <Button
                    onPress={() => isLoginOpenHandler(true)}
                    className="underline underline-offset-4 hover:opacity-40 duration-300"
                  >
                    Already have an account?
                  </Button>
                  <Button
                    color="primary"
                    onPress={() => isSignupOpenHandler(true)}
                    className="flex items-center border border-[#ffafcc] text-[#ea598e] rounded-lg py-1 px-4 hover:opacity-40 duration-300"
                  >
                    <FaUserCircle />
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
