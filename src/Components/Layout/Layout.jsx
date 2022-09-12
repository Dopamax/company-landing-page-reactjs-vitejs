import React from 'react'
import Nav from '../Nav/MyNav'
import "../../assets/css/styleheader.css"

function Layout(props) {
  return (
    <div className="background-animated background-full">
        <Nav />
        {props.children}
    </div>
  )
}

export default Layout