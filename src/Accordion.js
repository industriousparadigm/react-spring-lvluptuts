import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import useMeasure from './useMeasure'

const Accordion = () => {
  const [on, toggle] = useState(false)
  const [bind, { height, top, bottom }] = useMeasure()

  const animation = useSpring({
    overflow: 'hidden',
    height: on ? height + top + bottom : 0
  })

  console.log('height: ', height)

  return (
    <div>
      <h1>
        <button onClick={() => toggle(!on)}>Toggle</button>
      </h1>
      <animated.div style={animation}>
        <div {...bind} className='accordion'>
          <p>Hello, I'm inside the accordion!</p>
          <p>Epstein didn't do it</p>
        </div>
      </animated.div>
    </div>
  )
}

export default Accordion
