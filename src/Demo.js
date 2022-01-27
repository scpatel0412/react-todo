import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {incNumber,decNumber} from './actions/index'



const Demo = () => {
    const myState = useSelector((s) => s.changeValue)
    const dispatch = useDispatch();

  
    return (
        <div>
        increment counter
        <p>{myState}</p>
        <button onClick={() => dispatch(incNumber())}>Increment</button>
        <button onClick={() => dispatch(decNumber())}>Decrement</button>

        </div>
    )
}

export default Demo
