import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//引入子组件
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header/>
        <List/>
        <Footer/>
    </div>
  </div>
  );
}

export default App;
