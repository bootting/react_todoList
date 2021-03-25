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
  //添加清单项 Header组件传值
  addTodoItem = (todoObj) => {
     //获取todoList数据
     const {todoList} = this.state;
     //进行添加操作
     todoList.unshift(todoObj);
     //更新数据
     this.setState({
       todoList
     })
  }
  //勾选和取消勾选更改done值
  changeChoose = (id,done) => {
    //获取todoList数据
    const {todoList} = this.state;
    //找到id这个列表项
    const newTodoList = todoList.map((todoObj) =>{
      if(todoObj.id === id) {
        return {...todoObj,done:done}
      } else {
        return todoObj
      }
    })
    //更新值
    this.setState({
      todoList:newTodoList
    })
  }
  //删除清单项操作
  deleteTodoItem = (id) => {
    //获取数据
    const {todoList} = this.state;
    let index = todoList.findIndex(todoObj => todoObj.id === id);
    //删除对应的数据
    todoList.splice(index,1);
    //更新清单列表
    this.setState({
      todoList
    })
  }
  //全选状态处理
  changeCheckAll = (done) => {
    //获取数据
    const {todoList} = this.state;
    const newTodoList = todoList.map((todoObj) => {
       return {...todoObj,done}
    });
    this.setState({
      todoList:newTodoList
    })
  }
  //清空已完成的清单项
  handleClearChecked = () => {
    //获取数据
    const {todoList} = this.state;
    const newTodoList = todoList.filter((todoObj) => {return todoObj.done !== true});
    this.setState({
      todoList:newTodoList
    })
  }
   render() {
     const {todoList} = this.state;
      return  <div className="todo-container">
                <div className="todo-wrap">
                  <Header addTodoItem={this.addTodoItem}/>
                  <List todoList = {todoList} changeChoose = {this.changeChoose} deleteTodoItem={this.deleteTodoItem} />
                  <Footer todoList = {todoList} changeCheckAll ={this.changeCheckAll} handleClearChecked = {this.handleClearChecked} />
                </div>
              </div>
   }
}
