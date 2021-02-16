import React from 'react'

function NameList() {
    let names=['amit','bitan','chaya','dudun']
    let nameList=names.map((name,index)=><h3 key={index}> {name}</h3>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
