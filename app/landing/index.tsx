import Hero from './Hero-section'
import ExploreDestination from './Explore-destination-section'
import FeaturedHighlight from './Featured-highlight-section'
import LatestFeed from './Latest-section'
import Footer from '~/components/footer'
import Donate from '../supportus'

export default function Index() {
  return (
    <div>
      <Donate />
      <div className="h-full font-sans flex flex-col gap-6">
        <Hero />
        <FeaturedHighlight />
        <LatestFeed />
        <ExploreDestination />
        <Footer />
      </div>
    </div>
  )
}
