import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Count from './Count'

const App = () => {
  const [count, setCount] = useState(0)
  
  const increase = () => {
    setCount(count+1)
  }

  const randomIncrease = () => {
    setCount(count+(Math.floor(Math.random()*10)))
  }

  const decrease = () => {
    setCount(count-1)
  }

  const randomDecrease = () => {
    setCount(count-(Math.floor(Math.random()*10)))
  }

  const reset = () => {
    setCount(count*0)
  }

  useEffect(() => {
    document.title = 'Count: ' + count;
  })

  return (
    <div className="App">
        <Count count={count}/>
        <Button 
          increase={increase} 
          decrease={decrease}
          reset={reset}
          randomIncrease={randomIncrease}
          randomDecrease={randomDecrease}
          />
    </div>
  )
}

export default App;
