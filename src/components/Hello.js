import React from 'react'

export const Hello=(prop)=>{
    console.log(prop)
    //const {name}=prop destructuring props 
    return (
    <div className='demo'>
        <p> This is a paragraph tag and props name is {prop.name}</p>
        <h3> Welcome to React world. Myself Amit Kumar Mitra </h3>
        {prop.children}
    </div>
    )
}

//export default Hello