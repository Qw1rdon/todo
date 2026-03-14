import React from "react";
import AppHeader from "./AppHeader.jsx";
import SearshPanel from "./SearchPanel.jsx";
import TodoList from "./TodoList.jsx";
import ItemsFilter from "./ItemsFilters.jsx";
import AddItem from "./AddItem.jsx";

class App extends React.Component {

  maxId = 100;

  state = {
    todoData : [
      {id: 1, label: 'Wake'},
      {id: 2, label: 'Здрасьте', important: true },
      {id: 3, label: 'Сялям'},
      {id: 4, label: 'GG'},
      {id: 5, label: 'Пошли хавать'},
      {id: 6, label: 'Испугался?'},
    ]
  };

 deleteItem = (id) => {
  this.setState(
    ({todoData}) => 
    {
      const index = todoData.findIndex((num) => num.id === id)
      const before = todoData.slice(0, index)
      const after = todoData.slice(index + 1)
      const newMassive = [...before, ...after]
      return {
        todoData : newMassive
      }
    }
  );
 }

 addItem = (text) => {
  const newItem = {
    label: text,
    important: false,
    id: this.maxId++
  };

  this.setState(
    ({todoData}) => {
      const newMassive = [
        ...todoData,
        newItem
      ];
      return {
        todoData: newMassive
      }
    }
  )
 }

  render() {
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
          <TodoList todos = {this.state.todoData} onDeleted = {this.deleteItem} />
          <AddItem onAddItem = {this.addItem}/>
      </div>
    );
  }
}

export default App;