// import { useFeed } from "../hooks";
import { Button } from '@nextui-org/react'
import { NavLink } from 'react-router'
import { FaCircleCheck, FaCommentDots, FaCircleXmark } from 'react-icons/fa6'
import { BsTranslate } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import ProgressBar from '~/components/progress-bar'
import { feed_dummy_data } from '~/utils/contants'
import useStore, { setIsCommentOpen } from '~/stores/global'

export default function Index() {
  // const { activeTab, tabs, setActiveTab } = useFeed();
  const isCommentOpenHandler = useStore(setIsCommentOpen)

  return (
    <div className="flex flex-col gap-4 py-12">
      {/* <div className="flex flex-col items-center sticky my-4">
        <div className="flex w-full justify-around text-gray-500">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-center ${
                activeTab === tab
                  ? "text-black font-semibold border-b-2 border-[#a594f9]"
                  : "border-b-2 border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="w-full border-t border-gray-300 " />
      </div> */}
      {feed_dummy_data.map((item) => (
        <div className="w-full border border-[#E6DFF1] rounded-xl py-4 px-8 flex flex-col gap-2 shadow-md sm:px-4 xs:px-4">
          <img
            src={item.img_src}
            alt={item.img_alt}
            className="rounded-lg object-cover w-auto h-60"
            width={100}
            height={100}
          />
          <div className="flex items-center gap-2">
            {/* <img src="" alt="" /> */}
            <NavLink
              to={`/profile/${item.author.replace(/[\s-]/g, '').toLowerCase()}`}
              className="font-semibold text-xs hover:opacity-40 duration-300"
            >
              {item.author}
            </NavLink>
            <span className="text-xs text-slate-400">{item.created_at}</span>
          </div>
          <h2 className="text-3xl font-semibold sm:text-xl xs:text-xl">
            {item.title}
          </h2>
          <NavLink
            to={`/destination/${item.place_name
              .replace(/[\s-]/g, '')
              .toLowerCase()}`}
            className="hover:opacity-40 duration-300 flex items-center gap-1 underline underline-offset-4 text-[#0077b6]"
          >
            <IoLocationSharp />
            <span className="text-sm font-semibold">{item.place_name}</span>
          </NavLink>
          <div className="gap-2 flex flex-col tracking-wide text-default-700">
            <h2 className="sm:text-xs xs:text-xs">{item.desc}</h2>
            <div className="flex justify-between w-fit gap-2 items-center border rounded-full px-4 py-2 text-xs border-slate-800">
              <span>Translate</span>
              <BsTranslate />
            </div>
          </div>
          <div className="mt-2">
            <ProgressBar />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Button className="flex items-center gap-2 rounded-lg border border-[#bbd5b4] text-[#59824e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300 sm:text-xs xs:text-xs">
              <FaCircleCheck />
              Valid
            </Button>
            <Button className="flex items-center gap-2 rounded-lg border border-[#ffafcc] text-[#ea598e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300 sm:text-xs xs:text-xs">
              <FaCircleXmark />
              Not Valid
            </Button>
            <Button
              onPress={() => isCommentOpenHandler('1')}
              className="flex items-center gap-2 rounded-lg border border-[#acb0b7] text-[#63728c] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300 sm:text-xs xs:text-xs"
            >
              <FaCommentDots />
              Comment
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
