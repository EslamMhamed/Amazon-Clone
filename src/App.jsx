import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Banner from "./components/home/Banner"
import LayoutRoot from "./pages/LayoutRoot"
import NotFoundPage from "./pages/NotFoundPage"
import Home from "./pages/Home"
import { productsData } from "./api/api"


function App() {

  const router = createBrowserRouter([
    {path: "/", element:<LayoutRoot />, errorElement: <NotFoundPage/>, children:[
      {index:true, element: <Home />, loader: productsData }
    ]} 
  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
