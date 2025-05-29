// import { NavLink } from "react-router";
import { list_of_places_dummy } from '~/utils/contants'

export default function Index() {
  return (
    <div className="w-full">
      <div className="flex flex-col mb-12 mt-12">
        <div className="mt-4 flex gap-6 items-center justify-center flex-wrap">
          {list_of_places_dummy.map((item) => (
            <div className="relative w-48 h-48">
              {/* Image */}
              <img
                src={item.img_src}
                alt={item.img_alt}
                className="w-48 h-48 rounded-xl object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-between items-center bg-black/40 rounded-xl text-white">
                <div className="flex flex-col items-center mt-12 px-2 text-center">
                  {/* <span className="font-semibold text-base">#{item.rank}</span> */}
                  <h5 className="text-sm font-semibold">{item.name}</h5>
                  <span className="text-xs">{item.nation}</span>
                </div>
                <div className="mb-2 flex justify-center items-center">
                  <div>
                    {/* <span className="font-semibold text-sm">{item.score}</span> */}
                    {/* <span className="text-xs font-light">&nbsp;score</span> */}
                  </div>
                  <span className="text-xs">&nbsp;{item.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
