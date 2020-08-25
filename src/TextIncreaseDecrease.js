import React, { Component } from 'react';


class TextIncreaseDecrease extends Component {
    state = {fontSize:12};
    wheel = (event) => {

        if (event.deltaY < 0)
        {
        this.setState({
            fontSize: (this.state.fontSize - 1 < 12) ? 12 : this.state.fontSize - 1
        })
        }
        else if (event.deltaY > 0)
        {
            this.setState({
                fontSize: this.state.fontSize + 1
            })
        }        
    }
    render(){
        return(
            <div>
                <h1>Task 2 : </h1>
                <div style={{backgroundColor:"#c0c0c0",width:"80%",marginLeft:"20px"}}>
                    <h1 style={{fontSize:this.state.fontSize}} onWheel = {(e) => this.wheel(e)}>Scroll here to Increase / Decrease Text</h1>
                </div>
            </div>
            
        )
    }
}
export default TextIncreaseDecrease;