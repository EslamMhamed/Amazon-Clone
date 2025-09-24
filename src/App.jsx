import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LayoutRoot from "./pages/LayoutRoot"
import NotFoundPage from "./pages/NotFoundPage"
import Home from "./pages/Home"
import { productsData } from "./api/api"
import Signin from "./pages/Signin"


function App() {

  const router = createBrowserRouter([
    {path: "/", element:<LayoutRoot />, errorElement: <NotFoundPage/>, children:[
      {index:true, element: <Home />, loader: productsData },
    ]} ,
    {path: "/signin", element:<Signin />}
  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
