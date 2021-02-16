import React, { Component } from 'react';
//import Userna
import {UnameConsumer} from './UsernameContext';

class ComponentB extends Component {
    render() {
        return (
            <div>
                <UnameConsumer>
                    {
                        (data)=>{
                            return(<div>
                                <p> {data} </p>
                                {/* <h1>Demo Data </h1> */}
                            </div>)
                        }
                    }
                </UnameConsumer>
            </div>
        )
    }
}

export default ComponentB
