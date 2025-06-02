import Hero from './Hero-section'
import ExploreDestination from './Explore-destination-section'
import FeaturedHighlight from './Featured-highlight-section'
import LatestFeed from './Latest-section'
import Footer from '~/components/footer'
import Donate from '../supportus'
// import useStore, {
//   isLoginOpen,
//   isSignupOpen,
//   isCommentOpen,
// } from "@/stores/global";
// import Login from "@/components/fragments/Login/Form-section";
// import Signup from "@/components/fragments/Signup/Form-section";
// import Modal from "@/components/elements/Modal-dialog";
// import Comment from "@/components/fragments/Feed/Comment-section";

export default function Index() {
  // const isLogin = useStore(isLoginOpen);
  // const isSignup = useStore(isSignupOpen);
  // const isComment = useStore(isCommentOpen);

  return (
    <div>
      <Donate />
      <div className="h-full font-sans flex flex-col gap-6">
        {/* {isComment !== "" && (
          <Modal>
            <Comment />
          </Modal>
        )}
        {isLogin && (
          <Modal>
            <Login />
          </Modal>
        )}
        {isSignup && (
          <Modal>
            <Signup />
          </Modal>
        )} */}
        {/* <Navbar /> */}
        <Hero />
        <FeaturedHighlight />
        <LatestFeed />
        <ExploreDestination />
        <Footer />
        {/* <Feed /> */}
      </div>
    </div>
  )
}
