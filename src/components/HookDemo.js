import React,{useState,useEffect} from 'react'

function HookDemo() {

    const [count,doSomething]=useState(0)

    const doIncrement=()=>{
        doSomething(count+1)
    }

    const prevIncrement=()=>{
        doSomething(prevCount=>prevCount+1)
    }

    useEffect(() => {
        console.log('UseEffect called only for one time')

        return () => {
            console.log('work done')
        }
    }, [])

    return (
        <div>
            <button onClick={doIncrement}>Count - {count}</button>
            <button onClick={prevIncrement}>PrevIncrement - {count}</button>
        </div>
    )
}

export default HookDemo
