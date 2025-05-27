import { GiEternalLove } from 'react-icons/gi'

export default function Index() {
  return (
    <div>
      <div className="fixed z-50 translate-y-[30rem] cursor-pointer">
        <div className="group relative flex items-center bg-[#8cd78f] rounded-r-full text-[#2b532c] text-sm font-semibold px-2 py-2 transition-all duration-300 w-[2.5rem] hover:w-[12rem] overflow-hidden hover:bg-white hover:border-[#8cd78f] border">
          <GiEternalLove className="shrink-0" />
          <span className="ml-2 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300 tracking-wide">
            Fuel the Journey 🚀
          </span>
        </div>
      </div>
    </div>
  )
}
