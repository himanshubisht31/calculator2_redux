import { addCount, subCount, multiply, division } from './functions/action'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function App() {

  const [num, setNum] = useState(1)

  const handleChange = (e) => {
    setNum(+e.target.value)
  }

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center' }} >

      <input type="number" onChange={handleChange} />

      <h2>Count : {counter}</h2>

      <button onClick={() => { dispatch(addCount(num)) }}  >Increment</button>
      <button onClick={() => { dispatch(subCount(num)) }}  >Decrement</button>
      <button onClick={() => { dispatch(multiply(num)) }}  >Multiply</button>
      <button onClick={() => { dispatch(division(num)) }}  >Division</button>


    </div>
  );
}

export default App;
