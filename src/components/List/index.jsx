import React, { Component } from 'react';
//引入样式文件
import './index.css';
//引入List组件
import Item from '../Item'

export default class List extends Component {
    render() {
        const {todoList} = this.props;
        return (
            <ul className="todo-main">
               {
                   todoList.map((todoObj) => {
                       return <Item key={todoObj.id} {...todoObj}/>
                   })
               }
            </ul>
        )
    }
}