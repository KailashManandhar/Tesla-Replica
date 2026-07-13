import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollTotop from "./ScrollToTop"
const Layout = (props) => {
  return (
    <>
      <ScrollTotop />
      <Header trans={props.trans} />
      <main>
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default Layout
