import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Toggle from './Toggle'
import logo from './logo.svg'
import Nav from './Nav'
import Checkout from './Checkout'
import './App.css'

const App = () => {
  const [navOpen, setNavOpen] = useState(false)
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  })

  const navEffect = useSpring({
    transform: navOpen
      ? 'translate3d(0,0,0) scale(1)'
      : 'translate3d(100%,-100%,0) scale(0.6)'
  })

  return (
    <animated.div className='App' style={fade}>
      <header className='App-header'>
        <img src={logo} alt='boo' className='logo' />
        <button className='menu-button' onClick={() => setNavOpen(!navOpen)}>
          Menu
        </button>
        {/* <Nav animation={navEffect} /> */}
      </header>
      <main>
        <Toggle />
        <Checkout isOpen={navOpen} />
      </main>
    </animated.div>
  )
}

export default App
