import React from 'react'

const Button = ({increase, decrease, reset, randomDecrease,randomIncrease}) => {
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={randomIncrease}>Random Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={randomDecrease}>Random Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Button