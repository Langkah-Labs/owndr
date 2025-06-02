import { CiSquarePlus } from 'react-icons/ci'
import { Button } from '@nextui-org/react'
import useStore, { setIsContentFormOpen } from '~/stores/global'

export default function Index() {
  const isContentFormOpenHandler = useStore(setIsContentFormOpen)

  return (
    <div
      className="w-full border border-[#E6DFF1] rounded-3xl py-16 px-24 flex flex-col gap-2 shadow-md max-[650px]:px-4"
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
          <h2 className="text-4xl text-white font-semibold tracking-wider max-[650px]:text-3xl">
            Welcome Back, Philip!
          </h2>
          <h5 className="text-base max-[650px]:text-sm">
            Tell us your story here
          </h5>
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
      </div>
    </div>
  )
}
