import { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => { 
    if(navRef.current){
      const updateHeight = () => {
        setNavHeight(navRef.current.offsetHeight);
      }
      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, [])

  return (
    <>
        <Navbar ref={navRef}/>
        <main style={{paddingTop:navHeight}}>
          <Outlet />
        </main> 
        <Footer/>
    </>
  )
}

export default Layout
