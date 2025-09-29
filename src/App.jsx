import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LayoutRoot from "./pages/LayoutRoot"
import NotFoundPage from "./pages/NotFoundPage"
import Home from "./pages/Home"
import { productsData } from "./api/api"
import Signin from "./pages/Signin"
import Registration from "./pages/Registration"
import Cart from "./pages/Cart"


function App() {

  const router = createBrowserRouter([
    {path: "/", element:<LayoutRoot />, errorElement: <NotFoundPage/>, children:[
      {index:true, element: <Home />, loader: productsData },
      {path:"/cart", element: <Cart />}
    ]} ,
    {path: "/signin", element:<Signin />},
    {path: "/registration", element:<Registration />},
  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
