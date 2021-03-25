import React, { Component } from 'react';
//导入prop-Types验证
import propTypes from 'prop-types';
//引入样式文件
import './index.css';
//引入List组件
import Item from '../Item'

export default class List extends Component {
    //对接收到的props进行验证
    static propTypes = {
        todoList:propTypes.array.isRequired,
        changeChoose:propTypes.func.isRequired,
        deleteTodoItem:propTypes.func.isRequired
    }
    render() {
        const {todoList,changeChoose,deleteTodoItem} = this.props;
        return (
            <ul className="todo-main">
               {
                   todoList.map((todoObj) => {
                       return <Item key={todoObj.id} {...todoObj} changeChoose={changeChoose} deleteTodoItem={deleteTodoItem}/>
                   })
               }
            </ul>
        )
    }
}