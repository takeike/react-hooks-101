import React, { useEffect, useState } from 'react';

const App = props => {
  const [state, setState]=useState(props);
  const {name, price} = state;

  useEffect(() =>{
    console.log('useEffect is invoked')
  })
  useEffect(() =>{
    console.log('componentDidMount')},[]
  )
  useEffect(() =>{
    console.log('name only')},[name]
  )
  
  const reset = () => {
    setState(props)
  }

  return (
    <>
    <p>現在の{name}は、{price}です </p>
    <button onClick={()=>setState({...state, price:price+1})}>+1</button>
    <button onClick={()=>setState({...state, price:price-1})}>-1</button>
    <button onClick={reset}>Reset</button>
    <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  )
}

App.defaultProps = {
  name: '',
  price:1000
} 

export default App;
