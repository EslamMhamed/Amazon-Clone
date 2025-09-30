import { Outlet,  ScrollRestoration } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"


function LayoutRoot() {
  return (
    <div className="font-bodyFont bg-gray-100 ">
        <Header />
            <main>
                <ScrollRestoration />
                <Outlet />
            </main>
        <Footer />
    </div>
  )
}

export default LayoutRoot