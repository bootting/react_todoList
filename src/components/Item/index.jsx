import React, { Component } from 'react'
//引入样式文件
import './index.css';
export default class Item extends Component {
    //数据状态
    state = {
        mouse:false
    }
    render() {
        const {name} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor: mouse ? '#D0F2E7' : "#fff" }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                  <input type="checkbox"/>
                  <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
             </li>
        )
    }
    //鼠标移入移出事件
    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse:flag
            })
            
        }
    }
    
}