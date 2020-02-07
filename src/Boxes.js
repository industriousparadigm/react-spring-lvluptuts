import React from 'react'
import { animated, useSprings } from 'react-spring'

const items = [0.8, 0.1, 0.27, 0.75, 1]

const Boxes = () => {
  const springs = useSprings(
    items.length,
    items.map(item => ({
      from: { opacity: 0 },
      to: { opacity: item }
    }))
  )

  return (
    <div className='boxes-grid'>
      {springs.map(anim => (
        <animated.div style={anim} className='box' />
      ))}
    </div>
  )
}

export default Boxes
