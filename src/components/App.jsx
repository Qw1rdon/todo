import React from "react";
import AppHeader from "./AppHeader.jsx";
import SearshPanel from "./SearchPanel.jsx";
import TodoList from "./TodoList.jsx";

const App = () => {
  const todoData = [
    { label: 'Wake'},
    { label: 'Здрасьте', important: true},
    { label: 'Сялям'},
    { label: 'GG'},
    { label: 'Пошли хавать'},
     { label: 'Испугался?'}
  ]
  const isLogged = false;
  const login = <span>Login please</span>;
  const welcome = <span>Welcome, user</span>;

  return (
    <div>
      {isLogged ? welcome :login}
        <span> {(new Date()).toString()}</span>
        <AppHeader/>
        <SearshPanel/>
        <TodoList todos = {todoData}/>
    </div>
  );
}

export default App;