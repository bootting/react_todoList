import React, { Component } from 'react'
//引入css文件
import './index.css';
export default class Header extends Component {
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
