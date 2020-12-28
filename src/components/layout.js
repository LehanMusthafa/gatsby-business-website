import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      
        <main>{children}</main>

<Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
