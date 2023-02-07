import React from "react"
import { Link } from "react-router-dom"
import { Navbar } from "flowbite-react"
function NavBar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand to="/navbars">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
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
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
