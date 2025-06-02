import { NavLink } from 'react-router'
import { top_listed_dummy } from '~/utils/contants'

export default function Index() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="font-semibold underline underline-offset-8">
          Explore Destinations
        </h2>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {top_listed_dummy.map((item) => (
          <div className="flex items-center gap-2">
            <img
              src={item.img_src}
              alt={item.img_alt}
              height={100}
              width={100}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h5 className="text-sm font-semibold">{item.place_name}</h5>
            </div>
          </div>
        ))}
      </div>
      <NavLink
        to="/destination"
        className="text-[#ea598e] text-xs mt-2 underline underline-offset-4 hover:opacity-40 duration-300"
      >
        Explore More &#8594;
      </NavLink>
    </div>
  )
}
