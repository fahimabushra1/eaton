import { Outlet } from "react-router-dom"
import Navbar from "./assets/components/shared/Navbar"
import Home from "./assets/pages/Home"
import Footer from "./assets/components/shared/Footer"


function App() {
  

  return (
    <>
  <Navbar/>
  <Outlet/>
  <Footer/>
    </>
  )
}

export default App
