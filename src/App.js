import React from 'react'
import { createContext, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import AllPage from './Pages/AllPage';
import ActivePage from './Pages/ActivePage';
import CompletedPage from './Pages/CompletedPage';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasksStorage')) ?? ['Do coding challenges']);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    localStorage.setItem('tasksStorage', JSON.stringify([...tasks, input]))
    setTasks([...tasks, input])
    setInput('')
  }
  const handleRemove = (job) => {
    let index = tasks.findIndex(x => x === job)
    tasks.splice(index, 1)
    localStorage.setItem('tasksStorage', JSON.stringify([...tasks]))
    setTasks([...tasks])
  }

  const handleClearTasks = () => {
    localStorage.setItem('tasksStorage', JSON.stringify([]))
    setTasks([])
  }



  return (
    <Context.Provider value={{ tasks, setTasks, input, setInput, handleAdd, handleRemove, handleClearTasks }}>
      {children}
    </Context.Provider>)
};



function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AllPage />} />
        <Route path="/Active" element={<ActivePage />} />
        <Route path="/Completed" element={<CompletedPage />} />

      </Routes>
    </div>
  )
}
export { Context, ContextProvider }
export default App;