import {Outlet} from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

const HomeRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomeRoute
