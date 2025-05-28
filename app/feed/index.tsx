import FeedContent from '~/app/feed'
import Hero from '~/app/feed/Hero-section'
import Discover from '~/app/feed/Discover-section'
import Destination from '~/app/feed/Explore-destination-section'
import Navbar from '~/components/navbar-content'
import Donate from '~/app/supportus'
import Comment from '~/app/feed/Comment-section'
import useStore, { isContentFormOpen, isCommentOpen } from '~/stores/global'
import Modal from '~/components/modal-dialog'
import ContentForm from '~/app/feed/Form-section'

export default function Index() {
  const isContentForm = useStore(isContentFormOpen)
  const isComment = useStore(isCommentOpen)

  return (
    <div>
      <Donate />
      <Navbar />
      <div className="flex flex-col px-16 py-8 mt-20 md:mt-0 sm:mt-0 xs:mt-0 sm:px-8 xs:px-8">
        {isComment !== '' && (
          <Modal>
            <Comment />
          </Modal>
        )}
        {isContentForm && (
          <Modal>
            <ContentForm />
          </Modal>
        )}
        <div className="flex items-start justify-center gap-12 sm:flex-col xs:flex-col sm:gap-6 xs:gap-6">
          <div className="w-9/12 sm:w-full xs:w-full">
            <Hero />
          </div>
          <div className="w-3/12 sm:w-full xs:w-full">
            <Destination />
          </div>
        </div>
        <Discover />
        <FeedContent />
      </div>
    </div>
  )
}
