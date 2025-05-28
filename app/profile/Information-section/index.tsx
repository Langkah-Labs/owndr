export default function Index() {
  const dummy_stat = [
    {
      _id: 0,
      title: 'Posts',
      number: 170,
    },
    {
      _id: 1,
      title: 'Reactions',
      number: 89,
    },
    {
      _id: 2,
      title: 'Profile Score',
      number: 50,
    },
  ]
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-36 h-36 object-cover rounded-full bg-gray-50 sm:w-24 xs:w-24 sm:h-24 xs:h-24"
      />
      <div className="text-center">
        <h2 className="text-3xl font-semibold sm:text-xl xs:text-xl">
          Philip Well
        </h2>
        <h5 className="text-xs">Joined March 2025 &#9702; Indonesia</h5>
      </div>
      <div className="flex items-center justify-center gap-4 sm:gap-1 xs:gap-1">
        {dummy_stat.map((item) => (
          <div className="border rounded-full px-4 py-1 flex justify-center items-center gap-1 w-36 shadow-md sm:w-fit xs:w-fit">
            <span className="font-semibold text-lg sm:text-sm xs:text-sm">
              {item.number}
            </span>
            <span className="text-xs">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
