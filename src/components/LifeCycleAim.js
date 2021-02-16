import React, { Component } from 'react'

export class LifeCycleAim extends Component {
    constructor(props) {
        console.log('constructor calling......')
        super(props)
    
        this.state = {
             demo:'life-cycle demo'
        }
    }
    updateState=()=>{
        this.setState({
            demo:'update kam kiya'
        })
    }
    static getDerivedStateFromProps(props,state){
        //console.log(props)
        console.log('get derived method')
        return null
    }
    componentDidMount(){
        console.log('compoent did mount')
    }
    shouldComponentUpdate(){
        console.log('should component update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevStates){
        console.log('get snapshot before update')
        return null
    }
    componentDidUpdate(){
        console.log('componenet update')
    }
    render() {
        console.log('render here')
        return (
            <div>
                <button onClick={this.updateState}>Update Here</button>
            </div>
        )
    }
}

export default LifeCycleAim
