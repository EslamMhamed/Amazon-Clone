import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"


function LayoutRoot() {
  return (
    <div className="font-bodyFont">
        <Header />
            <main>
                <Outlet />
            </main>
        <Footer />
    </div>
  )
}

export default LayoutRoot