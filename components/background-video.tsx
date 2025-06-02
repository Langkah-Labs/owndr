/* eslint-disable @typescript-eslint/no-explicit-any */

const LandingPage = ({ children }: any) => {
  return (
    <div className="relative w-full h-[50vh]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dp5hwzmhm/video/upload/v1737208326/hero-bg-video_vxrqxx.mp4"
        autoPlay
        loop
        muted
      />

      {/* Content Overlay */}
      <div className="relative z-10 h-full text-white bg-black/50">
        {children}
      </div>
    </div>
  )
}

export default LandingPage
