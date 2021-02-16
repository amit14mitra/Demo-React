import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props){
        super(props)
        this.myref=React.createRef()
    }

    componentDidMount(){
        this.myref.current.focus()
    }

    render() {
        const myStyle={
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        }
        return (
            <>
                <h3 style={myStyle}> MyForm</h3>
                <label>Name:  <input type="text" ref={this.myref}/> </label><br/>
                <label>Email:  <input type="text"/> </label><br/>
                <label>Description: <textarea cols="20" rows="5"/></label>
            </>
        )
    }
}

export default RefDemo
