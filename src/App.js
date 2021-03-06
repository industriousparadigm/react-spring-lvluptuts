import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
// import Routes from './Routes'
// import Nav from './Nav'
import Checkout from './Checkout'
import logo from './logo.svg'
import './App.css'
import Modal from './Modal'
import Accordion from './Accordion'
import Gesture from './Gesture'
import Boxes from './Boxes'
// import Waypoints from './Waypoints'

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%,0,0) scale(0.6)`
  })
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  })

  return (
    <animated.div className='App' style={{}}>
      <header className='App-header'>
        <img src={logo} className='logo' alt='logo' />
        <button onClick={() => setNavOpen(!isNavOpen)} className='menu-button'>
          Menu
        </button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        <Modal />
        <Accordion />
        <Boxes />
        {/* <Gesture /> */}
        {/* <Waypoints /> */}
      </main>
      <Checkout isOpen={isNavOpen} />
    </animated.div>
  )
}

export default App
