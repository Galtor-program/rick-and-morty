import React from 'react'

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container justify-content-center">
      <a className="navbar-brand" href="/">{ brand }</a>
    </div>
  </nav>
  )
}

export default Navbar