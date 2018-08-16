import React, { Component } from 'react';
import Todos from './todo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      items: []
    };
  }
  addItem(e){
    e.preventDefault();
    if(this._inputElement !== ""){
      var newItem = {
        task: this._inputElement.value,
        isCompleted : false,
        key: Date.now()
      };
      this.setState((prevState)=>{
        return{
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value="";
  }
  toggleItem(key){
    var filteredItems = this.state.items.filter(function(item){
      if(item.key === key){
        item.isCompleted = !item.isCompleted;
      }
      return item
    })
    this.setState({
      items : filteredItems
    })
  }
  deleteItem(key){
    var filteredItems = this.state.items.filter(function(item) {
      return (item.key !== key)
    })
    this.setState({
      items : filteredItems
    })
  }
  render() {
    return (
      <div className="App">
        <div className="h1">React ToDo APP</div>
        <form onSubmit = {this.addItem.bind(this)}>
            <input className="form-control d-inline" type="text" ref = {(a) => this._inputElement = a}/>
            <button className="d-inline btn btn-dark" type="button"> Add </button>
        </form>
        <Todos items = {this.state.items}
               toggle = {this.toggleItem.bind(this)}
               delete = {this.deleteItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
