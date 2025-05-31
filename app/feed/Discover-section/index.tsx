import { Button } from '@nextui-org/react'
import { NavLink } from 'react-router'
import { FaCircleCheck, FaCommentDots, FaCircleXmark } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import ProgressBar from '~/components/progress-bar'
import { discover_dummy } from '~/utils/contants'
import useStore, { setIsCommentOpen } from '~/stores/global'

export default function Index() {
  const isCommentOpenHandler = useStore(setIsCommentOpen)

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="flex items-center gap-2">
        <div className="w-2 h-6 bg-[#103f66]"></div>
        <h2 className="font-semibold text-2xl">Discover More</h2>
      </div>
      <div className="flex items-start justify-center gap-4 w-full">
        <div className="flex flex-col gap-2">
          <img
            src="https://images.lbc.co.uk/images/670512?width=3537&crop=16_9&signature=fnMovhPozRL5gtbuGuScmXYx0ek="
            alt="traffic_picture"
            className="rounded-lg w-[38rem] h-72 object-cover"
            width={100}
            height={100}
          />
          <div>
            <div className="flex items-center gap-4">
              <NavLink
                to={`/profile/johanredd`}
                className="font-semibold text-xs hover:opacity-40 duration-300"
              >
                Johan Redd
              </NavLink>
              <span className="text-xs text-slate-400">Few minutes ago</span>
            </div>
            <NavLink
              to={`/destination/rammangrammang`}
              className="hover:opacity-40 duration-300 flex items-center gap-1 underline underline-offset-4 text-[#0077b6] my-1"
            >
              <IoLocationSharp size={12} />
              <span className="text-xs font-semibold">Rammang-rammang</span>
            </NavLink>
            <h2 className="text-3xl font-semibold">
              Lorem ipsum dolor sit amet
            </h2>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
            <div className="mt-6">
              <ProgressBar />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Button className="flex items-center gap-2 rounded-lg border border-[#bbd5b4] text-[#59824e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300">
                <FaCircleCheck />
                Valid
              </Button>
              <Button className="flex items-center gap-2 rounded-lg border border-[#ffafcc] text-[#ea598e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300">
                <FaCircleXmark />
                Not Valid
              </Button>
              <Button
                onPress={() => isCommentOpenHandler('1')}
                className="flex items-center gap-2 rounded-lg border border-[#acb0b7] text-[#63728c] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300"
              >
                <FaCommentDots />
                Comment
              </Button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap w-8/12">
          {discover_dummy.map((item) => (
            <div className="flex justify-start gap-2">
              <div>
                <img
                  src={item.img_src}
                  alt={item.img_alt}
                  className="h-40 rounded-lg object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <NavLink
                    to={`/profile/${item.author
                      .replace(/[\s-]/g, '')
                      .toLowerCase()}`}
                    className="font-semibold text-[0.5rem] hover:opacity-40 duration-300"
                  >
                    {item.author}
                  </NavLink>
                  <span className="text-[0.5rem] text-slate-400">
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
                  <span className="text-[0.5rem] font-semibold">
                    {item.place_name}
                  </span>
                </NavLink>
                <h2 className="text-base font-semibold">{item.title}</h2>
                <h5 className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </h5>
                <div className="mt-2">
                  <ProgressBar />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Button className="flex items-center gap-2 rounded-lg border border-[#bbd5b4] text-[#59824e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300">
                    <span className="sr-only">Valid</span>
                    <FaCircleCheck />
                  </Button>
                  <Button className="flex items-center gap-2 rounded-lg border border-[#ffafcc] text-[#ea598e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300">
                    <span className="sr-only">Not Valid</span>
                    <FaCircleXmark />
                  </Button>
                  <Button
                    onPress={() => isCommentOpenHandler('1')}
                    className="flex items-center gap-2 rounded-lg border border-[#acb0b7] text-[#63728c] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300"
                  >
                    <span className="sr-only">Comment</span>
                    <FaCommentDots />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
