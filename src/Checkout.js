import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Checkout = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 100 : 0
  })

  return (
    <div
      className='checkout'
      style={{ pointerEvents: isOpen ? 'none' : 'all' }}
    >
      <animated.div
        className='checkout-left'
        style={{
          transform: x.interpolate(x => `translate3d(-${x}%,0,0)`)
        }}
      ></animated.div>
      <animated.div
        className='checkout-right'
        style={{
          transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
        }}
      ></animated.div>
    </div>
  )
}

export default Checkout
