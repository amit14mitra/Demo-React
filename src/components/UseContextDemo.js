import React, {useContext} from 'react'
import {dataContext} from './UsernameContext'

function UseContextDemo() {

    const data = useContext(dataContext)
    return (
        <div>
            {data}
        </div>
    )
}

export default UseContextDemo
