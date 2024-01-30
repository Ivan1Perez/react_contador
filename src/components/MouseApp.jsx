import React, { useMemo, usememo } from 'react'
import useMousePosition from '../hooks/useMousePosition'

const MouseApp = () => {

  const position = useMousePosition();

  const background = useMemo(() => position.x < window.innerWidth/2 ? 'orange' : 'green', [position]);

  return (
    <>
      <div style={{background, height:'100vh'}}>
        <h1>MouseApp</h1>
        <pre>
          {JSON.stringify(position, null, 2)}
        </pre>
      </div>
    </>
  )
}

export default MouseApp