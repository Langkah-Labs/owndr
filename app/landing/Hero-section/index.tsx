import { NavLink } from 'react-router'
import BackgroundVideo from '~/components/background-video'
import Navbar from '~/components/navbar-white-logo'

export default function index() {
  return (
    <BackgroundVideo>
      <div className="pt-8">
        <Navbar />
      </div>
      <div className="flex px-36 justify-center mt-24 xs:px-16 xs:mt-12 sm:mt-32">
        <div className="flex flex-col items-start justify-center gap-4">
          <span className="text-4xl font-bold tracking-wide xs:text-3xl">
            Find your truth wander
          </span>
          <span className="text-sm xs:text-xs">
            Experience the freedom to explore with confidence. Our platform
            empowers you to plan trips effortlessly, find destinations that
            resonate with your style, and make every journey a true reflection
            of who you are
          </span>
          <NavLink
            to="/feed"
            className="bg-[#ea598e] text-white rounded-lg px-4 py-1 hover:opacity-40 duration-300 xs:text-xs"
          >
            Explore Posts &#8594;
          </NavLink>
        </div>
      </div>
    </BackgroundVideo>
  )
}
