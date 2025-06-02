import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'
import { FaQuestionCircle, FaHandsHelping } from 'react-icons/fa'
import { HiNewspaper } from 'react-icons/hi2'
import { FaMapLocationDot } from 'react-icons/fa6'
import { FaRegPenToSquare } from 'react-icons/fa6'
import useStore, { setIsContentFormOpen } from '~/stores/global'

const navigation = [
  { name: 'What is Owndr?', href: '/about', icon: '' },
  { name: 'FAQ', href: '/faq', icon: <FaQuestionCircle /> },
  {
    name: 'Empower the Community',
    href: '/',
    icon: <FaHandsHelping color="#fdd95e" />,
  },
  {
    name: 'Feed',
    href: '/feed',
    icon: <HiNewspaper />,
  },
  {
    name: 'Destination',
    href: '/destination',
    icon: <FaMapLocationDot color="#c6272a" />,
  },
]

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isContentFormOpenHandler = useStore(setIsContentFormOpen)

  return (
    <header className="lg:fixed top-0 left-0 w-full z-50 backdrop-blur-xl">
      <nav
        className="mx-auto flex items-center p-8 justify-between backdrop-blur-2xl"
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
        <div className="hidden lg:flex items-center gap-1 text-sm border border-[#ffafcc] text-[#ea598e] rounded-lg py-1 px-4 hover:opacity-40 duration-300">
          <FaRegPenToSquare />
          <Button
            onPress={() => isContentFormOpenHandler(true)}
            className="hover:opacity-40 duration-300"
          >
            Create a story
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
                <div className="lg:hidden flex items-center justify-center gap-1 text-sm border border-[#ffafcc] text-[#ea598e] rounded-lg py-1 px-4 hover:opacity-40 duration-300">
                  <FaRegPenToSquare />
                  <Button
                    onPress={() => isContentFormOpenHandler(true)}
                    className="hover:opacity-40 duration-300"
                  >
                    Create a story
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
