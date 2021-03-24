import React, { Component } from 'react'
//引入样式文件
import './index.css';
export default class Item extends Component {
    render() {
        return (
            <li>
                <label>
                  <input type="checkbox"/>
                  <span>yyyy</span>
                </label>
                <button className="btn btn-danger" style={{display:'none'}}>删除</button>
             </li>
        )
    }
}