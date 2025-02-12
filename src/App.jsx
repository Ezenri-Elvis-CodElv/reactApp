import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"
import HomeRoute from "./routes/HomeRoute"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import LoginPage from "./pages/LoginPage"
import Category from "./components/Category"
import SignUp from "./pages/SignUp"

const App = () => {
  const routes = createBrowserRouter([
   {
    path: "",
    element: <HomeRoute />,
    children: [
      {
        path: "",
        element: <Home />
       },
      // {
      //   path: "/Category",
      //   element: <Category />
      //  },
       {
        path: "/Contact",
        element: <Contact />
       },
       {
        path: "/Shop/:productname",
        element: <Shop />
       }
       
    ],
   },
   {
    path: "/dashboard",
    element: <Dashboard />
   },
   {
    path: "/about",
    element: <About />
   },
   {
    path: "/LoginPage",
    element: <LoginPage />
   },
   {
    path: "/SignUp",
    element: <SignUp />
   },
   
  ])
  return (
   <RouterProvider router={routes}/>
  )
}

export default App
