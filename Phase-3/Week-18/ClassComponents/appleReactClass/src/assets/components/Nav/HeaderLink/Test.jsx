import { Component } from 'react';

class Test extends Component{
    render(){
        return(
            <div>
                <h1>Test {this.props.name} </h1>
            </div>
        )
    }
}

export default Test;