import React, { Component } from 'react'
//引入样式文件
import './index.css';
export default class Item extends Component {
    //数据状态
    state = {
        mouse:false
    }
    render() {
        const {id,name,done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor: mouse ? '#D0F2E7' : "#fff" }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                  <input type="checkbox" checked={done} onChange={this.handleChangeChoose(id)}/>
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
    //勾选和取消勾选功能
    handleChangeChoose = (id) => {
        //需要找到是哪个列表项更改了done值
        return (event) =>{
            this.props.changeChoose(id,event.target.checked)
        }
    }
    
}