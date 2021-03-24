import React, { Component } from 'react';

import './App.css';
//引入子组件
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';



export default class App extends Component {
  //定义清单数据状态
  state = {
    todoList:[
      {id:1,name:"吃饭",done:false},
      {id:2,name:"敲代码",done:false},
      {id:3,name:"写技术博客",done:true}
    ]
  }
   render() {
     const {todoList} = this.state;
      return  <div className="todo-container">
                <div className="todo-wrap">
                  <Header/>
                  <List todoList={todoList}/>
                  <Footer/>
                </div>
              </div>
   }
}
