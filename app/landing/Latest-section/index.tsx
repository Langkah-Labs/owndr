import { Button } from '@nextui-org/react'
import { NavLink } from 'react-router'
import { FaCircleCheck, FaCommentDots, FaCircleXmark } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { HiNewspaper } from 'react-icons/hi2'
import ProgressBar from '~/components/progress-bar'
import { popular_dummy } from '~/utils/contants'
import useStore, { setIsCommentOpen } from '~/stores/global'

export default function Index() {
  const isCommentOpenHandler = useStore(setIsCommentOpen)

  return (
    <div className="flex flex-col mb-12 px-36">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-[#103f66]"></div>
            <h2 className="font-semibold text-2xl">Latest Feed</h2>
          </div>
          <h5>
            Stay updated with the latest posts, updates, and activities
            happening right now. Explore what's trending and never miss a beat.
          </h5>
        </div>
      </div>
      <div className="mt-4 flex gap-8 items-center justify-center">
        {popular_dummy.map((item) => (
          <div className="w-48 flex flex-col gap-2">
            {/* Image */}
            <img
              src={item.img_src}
              alt={item.img_alt}
              width={100}
              height={100}
              className="w-48 h-36 rounded-xl object-cover"
            />

            {/* Overlay Content */}
            <div>
              <div className="flex items-center gap-4">
                <NavLink
                  to={`/profile/${item.author
                    .replace(/[\s-]/g, '')
                    .toLowerCase()}`}
                  className="font-semibold text-xs hover:opacity-40 duration-300"
                >
                  {item.author}
                </NavLink>
                <span className="text-xs text-slate-400">
                  {item.created_at}
                </span>
              </div>
              <NavLink
                to={`/destination/${item.place_name
                  .replace(/[\s-]/g, '')
                  .toLowerCase()}`}
                className="hover:opacity-40 duration-300 flex items-center gap-1 underline underline-offset-4 text-[#0077b6] my-1"
              >
                <IoLocationSharp size={12} />
                <span className="text-xs font-semibold">{item.place_name}</span>
              </NavLink>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <h5 className="text-xs">{item.desc}</h5>
              <div className="mt-6">
                <ProgressBar />
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Button
                  isIconOnly
                  size="md"
                  className="flex items-center gap-2 rounded-lg border border-[#bbd5b4] text-[#59824e] text-sm cursor-pointer hover:opacity-40 duration-300"
                >
                  <FaCircleCheck />
                </Button>
                <Button
                  isIconOnly
                  size="md"
                  className="flex items-center gap-2 rounded-lg border border-[#ffafcc] text-[#ea598e] text-sm cursor-pointer hover:opacity-40 duration-300"
                >
                  <FaCircleXmark />
                </Button>
                <Button
                  onPress={() => isCommentOpenHandler('1')}
                  isIconOnly
                  size="md"
                  className="flex items-center gap-2 rounded-lg border border-[#acb0b7] text-[#63728c] text-sm cursor-pointer hover:opacity-40 duration-300"
                >
                  <FaCommentDots />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-6">
        <NavLink
          to="/feed"
          className="flex gap-2 items-center text-base bg-[#ea598e] text-white rounded-xl px-16 py-2 tracking-wide font-semibold hover:opacity-40 duration-300"
        >
          <HiNewspaper />
          View all posts
        </NavLink>
      </div>
    </div>
  )
}
