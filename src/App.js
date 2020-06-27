import React from 'react';
//import logo from './logo.svg';
import './App.css';
import List from './components/list';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      term: '',
      items: []
    }
  }

  onChange = (event) => {
    this.setState({term: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
    term: '',
    items: [...this.state.items, this.state.term]
    })
  }

  render(){
  return (
    <div>
      <div className="header">
        <div className="wrapper">
          <img src="" alt=""></img>
          <p className="title">Road To Hire</p>
        </div>
      </div>
      <div className="app">
        <div className="app-wrapper">
          <p className="app-title">To-Do List</p>
          <form className="App" onSubmit={this.onSubmit}>
            <input type="text" id="box" value={this.state.term} onChange={this.onChange} placeholder="Type here to add a task" ></input>
            <br></br>

          </form>
          <br></br>
          <List items = {this.state.items}/>
        </div>
      </div>
    </div>
  );
  }
}