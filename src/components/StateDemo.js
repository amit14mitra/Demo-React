import React,{Component} from 'react'

class StateDemo extends Component{

    constructor(prop){
        // console.log(prop)
        super(prop)
        this.state={
            msg:'Didir State a achi'
        }
    }

    changeIt=()=>{
        this.setState({
            msg:'Ab ki bar bhi didi ka sarkar'
        })
    }

    render(){
        return (
        <div>
            <h5>{this.state.msg}</h5>
            <button onClick={this.changeIt}>Change It</button>
            {/* <h4>This is a Statedemo class component</h4> */}
        </div>
        )
    }
}

export default StateDemo