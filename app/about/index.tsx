import AboutContent from '~/app/about/Content-section'
import Navbar from '~/components/navbar-blue-logo'
import Footer from '~/components/footer'
// import useStore, { isLoginOpen, isSignupOpen } from '@/stores/global'
// import Login from '@/components/fragments/Login/Form-section'
// import Signup from '@/components/fragments/Signup/Form-section'
// import Modal from '@/components/elements/Modal-dialog'

export default function Index() {
  //   const isLogin = useStore(isLoginOpen)
  //   const isSignup = useStore(isSignupOpen)

  return (
    <div>
      {/* {isLogin && (
        <Modal>
          <Login />
        </Modal>
      )}
      {isSignup && (
        <Modal>
          <Signup />
        </Modal>
      )} */}
      <div className="pt-8">
        <Navbar />
      </div>
      <AboutContent />
      <Footer />
    </div>
  )
}
