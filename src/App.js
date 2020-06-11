import React, { Component } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state={
    items:[],
    id:0,
    item:''
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
