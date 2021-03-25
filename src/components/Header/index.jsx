import React, { Component } from 'react';
//导入nanoid库
import {nanoid} from 'nanoid';
//导入prop-Types验证
import propTypes from 'prop-types';
//引入css文件
import './index.css';
export default class Header extends Component {
    //对接收到的props进行验证
    static propTypes = {
        addTodoItem:propTypes.func.isRequired
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleAddItem} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
    //回车添加清单项功能
    handleAddItem = (event) => {
        if(event.keyCode === 13) {
            //确保用户输入了内容,如果内容为空，做出提示
            if(event.target.value.trim().length === 0 ) {
                alert("输入的内容不能为空哦~");
            }
            const todoObj = {id:nanoid(),name:event.target.value,done:false};
            //传递给父组件来处理清单数据
            this.props.addTodoItem(todoObj);
            //清空输入框
            event.target.value = "";
        }
    }
}
