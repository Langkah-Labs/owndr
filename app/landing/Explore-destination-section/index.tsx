import { NavLink } from 'react-router'
import { popular_places_dummy } from '~/utils/contants'

export default function Index() {
  return (
    <div className="w-full">
      <div className="flex flex-col mb-12 px-36 max-[650px]:px-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-2xl">
            Discover the most sought-after destinations curated by our
            community!
          </h2>
          <h5 className="max-[650px]:text-xs">
            Our Top Listed Destinations are ranked based on destination scores,
            reflecting the collective insights of travelers just like you.
          </h5>
        </div>
        <div className="mt-4 flex gap-6 items-center justify-center max-[650px]:flex-wrap max-[1024px]:flex-wrap">
          {popular_places_dummy.map((item) => (
            <div className="relative w-48 h-48">
              {/* Image */}
              <img
                src={item.img_src}
                alt={item.img_alt}
                className="w-48 h-48 rounded-xl object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-between items-center bg-black/40 rounded-xl text-white">
                <div className="flex flex-col items-center mt-12">
                  <h5 className="text-sm font-semibold">{item.name}</h5>
                  <span className="text-xs">{item.nation}</span>
                </div>
                <div className="mb-2 flex justify-center items-center">
                  <div></div>
                  <span className="text-xs">&nbsp;{item.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <NavLink
            to="/destination"
            className="border rounded-xl px-6 py-2 border-[#103f66] text-sm hover:opacity-40 duration-300"
          >
            Explore more destination
          </NavLink>
        </div>
      </div>
    </div>
  )
}
