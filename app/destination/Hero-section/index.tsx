export default function Index() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <span className="text-4xl font-bold tracking-wide ">
          Discover, Explore, and Experience the World's Best Destinations.
        </span>
        <span className="text-sm">
          Find the perfect place for your next adventure. Whether you're seeking
          hidden gems, cultural landmarks, or breathtaking landscapes, our
          curated list of destinations helps you explore the world with
          confidence. Let real experiences guide your journey.
        </span>

        <form className="w-full mt-2" onSubmit={(e) => e.preventDefault()}>
          <input
            id="posting-name"
            name="posting-name"
            type="text"
            placeholder="Where do you want to go next?"
            className="w-4/12 py-4 px-8 text-black bg-white border-0 rounded-full shadow-sm text-center ring-1 ring-inset ring-[#103f66] focus:ring-2 focus:ring-inset focus:ring-white"
          />
        </form>
      </div>
    </div>
  )
}
