import React,{useReducer} from 'react'

const count = 0;

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      default:
        throw new Error()
    }
}

function UseReducerDemo() {
    
    const [ModifiedCount, dispatch] = useReducer(reducer,count);

    return (
        <div>
            Count: {ModifiedCount} <br></br>
            <button onClick={() => dispatch({type: 'decrement'})}> - </button>
            <button onClick={() => dispatch({type: 'increment'})}> + </button>
        </div>
    )
}

export default UseReducerDemo
