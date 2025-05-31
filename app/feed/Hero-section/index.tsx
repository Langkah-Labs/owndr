// import { FaPhotoFilm, FaRegPenToSquare } from "react-icons/fa6";
// import { FaVideo } from "react-icons/fa";
// import { RiSendPlaneFill } from "react-icons/ri";
import { CiSquarePlus } from 'react-icons/ci'
import { Button } from '@nextui-org/react'
import useStore, { setIsContentFormOpen } from '~/stores/global'

export default function Index() {
  const isContentFormOpenHandler = useStore(setIsContentFormOpen)

  return (
    <div
      className="w-full border border-[#E6DFF1] rounded-3xl py-16 px-24 flex flex-col gap-2 shadow-md"
      style={{
        backgroundImage: `linear-gradient(grey, grey), url('https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=3021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="text-white text-center">
          <h2 className="text-4xl text-white font-semibold tracking-wider">
            Welcome Back, Philip!
          </h2>
          <h5 className="text-base">Tell us your story here</h5>
        </div>
        <div className="flex items-center gap-1 text-sm bg-[#ea598e] text-white rounded-xl px-4 py-2 shadow-lg hover:shadow-xl transition hover:opacity-40 duration-300">
          <CiSquarePlus size={20} />
          <Button
            onPress={() => isContentFormOpenHandler(true)}
            className="hover:opacity-40 duration-300"
          >
            Add new
          </Button>
        </div>
        {/* <form className="relative w-full" onSubmit={(e) => e.preventDefault()}>
          <input
            id="posting-name"
            name="posting-name"
            type="text"
            placeholder="What's happening?"
            className="w-full pl-8 pr-20 py-4 text-black bg-white border-0 rounded-full shadow-sm ring-1 ring-inset ring-[#E6DFF1] focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6"
          />
          <button
            type="submit"
            className="absolute flex items-center gap-1 right-4 top-1/2 -translate-y-1/2 rounded-2xl bg-[#103f66] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-40 duration-300"
          >
            Post
            <RiSendPlaneFill />
          </button>
          <div className="absolute right-24 top-1/2 -translate-y-1/2 rounded-xl px-2 py-2.5 font-semibold hover:opacity-40 duration-300 cursor-pointer">
            <FaVideo color="#84dcc6" />
          </div>
          <div className="absolute right-32 top-1/2 -translate-y-1/2 rounded-xl px-2 py-2.5 font-semibold hover:opacity-40 duration-300 cursor-pointer">
            <FaPhotoFilm color="#84dcc6" />
          </div>
        </form> */}
      </div>
    </div>
  )
}
