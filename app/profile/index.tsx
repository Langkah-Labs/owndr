import Sidebar from '~/components/sidebar'
import ProfileInformation from '~/app/profile/Information-section'
import ProfilePosts from '~/app/profile/Content-section'

export default function index() {
  return (
    <Sidebar>
      <div className="flex flex-col py-16">
        <ProfileInformation />
        <div className="my-8">
          <hr />
        </div>
        <ProfilePosts />
      </div>
    </Sidebar>
  )
}
