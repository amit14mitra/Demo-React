import React, { Fragment } from 'react'

function FunctionEvent() {
    
    function functionClick(){
        const c=prompt('Enter any text')
        console.log(`value is ${c}`)
    }
    return (
        <Fragment>
            <p>This is Fragment demo</p>
            <button onClick={functionClick}>Render Content</button>
        </Fragment>
    )
}

export default FunctionEvent
