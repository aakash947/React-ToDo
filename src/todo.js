import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class todos extends Component {
  toggleItem(key){
    this.props.toggle(key)
  }
  deleteItem(key){
    this.props.delete(key)
  }
  render() {
    const {items} = this.props;
    const itemsList = items.map(item =>{
        return (
          <div className="item" key = {item.key}>
            <input className="" type="checkbox"/>
            <p className="" onClick={() => this.toggleItem(item.key)}
                > {item.task}</p>
              <button className="but btn btn-danger" onClick={()=>this.deleteItem(item.key)}>X</button>
              </div>
            )
    })
    return (
        <div class="wrapper">
            {itemsList}
        </div>
    );
  }
}

export default todos;
