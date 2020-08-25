import React, { Component } from 'react';

class DropDownSelect extends Component{
    constructor() {
        super();
        this.typeList = [{type:"car", name:"Car"}, {type:"fruits", name:"Fruits"}]
        this.state = {
          type: 'car',
          orderToggle:false,
          lists : [{
            "car":[
                {id:1,item:"Ford"},
                {id:2,item:"BMW"},
                {id:3,item:"KIA"},
                {id:4,item:"Toyota"},
                {id:5,item:"Audi"},
                {id:6,item:"Honda"}],
            "fruits":[
                {id:1,item:"Grapes"},
                {id:2,item:"Apple"},
                {id:3,item:"Papaya"},
                {id:4,item:"Orange"}]
          }]

        };
        this.handleChange = this.handleChange.bind(this);
        this.changeOrder = this.changeOrder.bind(this);
       }
    handleChange = (event) => {
        this.setState({type: event.target.value});
    }
    changeOrder = () => {
        this.setState({orderToggle: !this.state.orderToggle})
            const myData = (this.state.orderToggle) ? this.state.lists[0][this.state.type].sort((a, b) => a.item.localeCompare(b.item)) : this.state.lists[0][this.state.type].sort((a, b) => b.item.localeCompare(a.item));
        var someProperty = {...this.state.lists[0]};
        someProperty[this.state.type] = myData;
        this.setState({someProperty})
    }
    render (){
        return(
            <div>
                <h1>Task 3 : </h1>
                <strong>Select Type:</strong>
                <select value={this.state.type} onChange={this.handleChange}>
                    {this.typeList.map(e => <option key={e.type} value={e.type}>{e.name}</option>)}                    
                </select>
                <div>
                <ul style={{listStyle:"none",width:"200px"}}>
                    {this.state.lists[0][this.state.type].map(each => <li key={each.id}>{each.item}</li>)}
                </ul>
                <button onClick={this.changeOrder}>Sort</button>
                </div>
                
            </div>
        )
    }
}

export default DropDownSelect;