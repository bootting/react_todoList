import React, { Component } from 'react';
//导入prop-Types
import propTypes from 'prop-types';
//引入样式文件
import './index.css';
export default class Item extends Component {
    //对接收到的prop进行验证
    static propTypes = {
        changeChoose:propTypes.func.isRequired,
        deleteTodoItem:propTypes.func.isRequired
    }
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
                <button onClick={() => {this.deleteItem(id)}} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
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
    //删除选中的id对应的清单项
    deleteItem = (id) => {
       //模态框提示用户：防止误删
       if(window.confirm("您确定要删除此条清单吗？")) {
            this.props.deleteTodoItem(id);
       }
    }
    
}