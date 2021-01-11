import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1)
  }
  const decrement = () =>{
    setCount(count-1)
  }

  const increment2 = () =>{
    setCount(previousCount => previousCount +1)
  }
  const decrement2 = () =>{
    setCount(previousCount => previousCount -1)
  }
  
  const reset = () => {
    // setCount(0)
    setCount(mycount => 0)
  }

  const doubleCount = () => {
    setCount(previousCount => previousCount*2)
  }

  // const div3 = () => {
  //   if(count%3 === 0){
  //     setCount(count => count/3)
  //   }
  // }
  const div3 = () => setCount(previousCount => {
    if(previousCount%3 ===0){
      return previousCount/3
    }
    else{
      return previousCount
    }
  })

  return (
    <React.Fragment>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={doubleCount}>x2</button>
        <button onClick={div3}>/3</button>
      </div>

    </React.Fragment>
  )
}
export default App;
