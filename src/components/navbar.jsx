import React from "react"
import { Link } from "react-router-dom"
import { Navbar } from "flowbite-react"
import Logo from "../images/main_logo.png"
function NavBar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand to="/navbars">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          AIWC Academy Of Excellence
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/school-features" className="hover:text-blue-500">
          School Features
        </Link>
        <Link to="/achievements" className="hover:text-blue-500">
          Achievements
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
