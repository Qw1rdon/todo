import React from "react";
import AppHeader from "./AppHeader.jsx";
import SearshPanel from "./SearchPanel.jsx";
import TodoList from "./TodoList.jsx";
import ItemsFilter from "./ItemsFilters.jsx";

const App = () => {
  const todoData = [
    { id: 1,label: 'Wake'},
    { id: 2,label: 'Здрасьте', important: true},
    { id: 3,label: 'Сялям'},
    { id: 4,label: 'GG'},
    { id: 5,label: 'Пошли хавать'},
    { id: 6,label: 'Испугался?'}
  ]
  return (
    <div className="container">
        <AppHeader active = {3} done = {4}/>
        <div className="row">
            <div className="col-6">
                <SearshPanel/>
            </div>
            <div className="col-6">
                <ItemsFilter/>
            </div>
        </div>
        <SearshPanel/>
        <TodoList todos = {todoData}/>
    </div>
  );
}

export default App;