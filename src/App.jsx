import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"
import HomeRoute from "./routes/HomeRoute"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import LoginPage from "./pages/Auth/LoginPage"
import Category from "./components/Category"
import SignUp from "./pages/Auth/SignUp"
import PrivateRoute from "./routes/PrivateRoute"


const App = () => {
  const routes = createBrowserRouter([
   {
    path: "",
    element: <HomeRoute />,
    children: [
      {
        path: "/",
        element: <Home />
       },
       {
        path: "/Contact",
        element: <Contact />
       },
       {
        path: "/Shop",
        element: <Shop />
       }
       
    ],
   },
   {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <Dashboard/>
      }
    ]
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
