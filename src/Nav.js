import React from 'react'
import { animated } from 'react-spring'

const Nav = ({ animation }) => {
  return (
    <animated.div className='nav-wrapper' style={animation}>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>Medals</a>
        <a href='#'>About</a>
        <a href='#'>Issues</a>
      </nav>
    </animated.div>
  )
}

export default Nav
