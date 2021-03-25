import React, { Component } from 'react';
//引入prop-types包
import propTypes from 'prop-types';
//引入样式文件
import './index.css';
export default class Footer extends Component {
  //对接收到的props进行验证
  static propTypes = {
    todoList:propTypes.array.isRequired,
    changeCheckAll:propTypes.func.isRequired,
    handleClearChecked:propTypes.func.isRequired
  }
    render() {
      const {todoList} = this.props;
      //已完成的数量
      const doneNum = todoList.reduce((pre,current) => {
         return pre + (current.done ? 1 : 0)
      },0)
     //全部数量
     const allNum = todoList.length;
        return (
            <div className="todo-footer">
                <label>
                  <input type="checkbox" checked={doneNum === allNum && doneNum !== 0 ? true : false}  onChange={this.handleCheckAll}/>
                </label>
                <span>
                <span>已完成{doneNum}</span> / 全部{allNum}
                </span>
                <button onClick={this.clearChecked} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
     //全选状态处理
     handleCheckAll = (event) =>{
      this.props.changeCheckAll(event.target.checked);
    }
    //清除已完成的清单项
    clearChecked = () => {
        this.props.handleClearChecked();
    }
}
