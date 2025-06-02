import Navbar from '~/components/navbar-content'
import Donate from '~/app/supportus'
import Header from '~/app/destination/Hero-section'
import ListPlaces from '~/app/destination/List-of-places-section'

export default function Index() {
  return (
    <div>
      <Donate />
      <Navbar />
      <div className="flex flex-col px-16 py-16 mt-16 max-[650px]:px-8 max-[650px]:mt-0">
        <Header />
        <ListPlaces />
      </div>
    </div>
  )
}
