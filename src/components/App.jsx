import { useEffect, useState } from 'react';
import AppHeader from "./AppHeader.jsx";
import SearshPanel from "./SearchPanel.jsx";
import TodoList from "./TodoList.jsx";
import ItemsFilter from "./ItemsFilters.jsx";
import AddItem from "./AddItem.jsx";

const App = () => {

  const [todoData, setTodoData] = useState(() => {
      const savedTodos = localStorage.getItem('todoData');
  
      return savedTodos
          ? JSON.parse(savedTodos)
          : [
              {id: 1, label: 'Wake', important: false, done: false },
              {id: 2, label: 'Здрасьте', important: false, done: false },
              {id: 3, label: 'Сялям', important: false, done: false },
              {id: 4, label: 'GG', important: false, done: false },
              {id: 5, label: 'Пошли хавать', important: false, done: false },
              {id: 6, label: 'Испугался?', important: false, done: false }
          ];
  });

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
  

  // Сщхранение в localStorage
  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoData));
  }, [todoData]);

  // поиск
  const onSearchChange = (term) => {
    setTerm(term);
  };

  //фильтр
  const onFilterChange = (filter) => {
      setFilter(filter);
  };
  
  const searchItem = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => 
      item.label.toLowerCase().includes(term.toLowerCase())
    );
  };

  const filterItem = (items, filter) => {
    switch (filter) {
       case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const toggleDone = (id) => {
    setTodoData((todoData) => {
      const index = todoData.findIndex((item) => item.id === id);
      const oldItem = todoData[index];
      
      const newItem = {
        ...oldItem,
        done: !oldItem.done
      };

      return [
          ...todoData.slice(0, index),
          newItem,
          ...todoData.slice(index + 1)
        ];
    });
  };

  const toggleImportant = (id) => {
    setTodoData((todoData) => {
      const index = todoData.findIndex((item) => item.id === id);
      const oldItem = todoData[index];
      
      const newItem = {
        ...oldItem,
        important: !oldItem.important
      };

      return [
        ...todoData.slice(0, index),
        newItem,
        ...todoData.slice(index + 1)
      ];
    });
  };

 const deleteItem = (id) => {
  setTodoData((todoData) => {
    return todoData.filter((item) => item.id !== id);
  });
 };

 const addItem = (text) => {
  if (!text.trim()) return;

  setTodoData((todoData) => {
    const maxId = todoData.length > 0
        ? Math.max(...todoData.map((item) => item.id))
        : 0;

      const newItem = {
        id: maxId + 1,
        label: text,
        important: false,
        done: false
      };

      return [...todoData, newItem];
  });
 };

  
    const visibleItems = filterItem(searchItem(todoData, term), filter);
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="container">
          <AppHeader active = {todoCount} done = {doneCount}/>
          
          <SearshPanel onSearchChange = {onSearchChange}/>
              
          <ItemsFilter filter={filter} onFilterChange = {onFilterChange}/>
          
          <TodoList 
          todos={visibleItems} 
          onDeleted={deleteItem} 
          onToggleDone={toggleDone}
          onToggleImportant={toggleImportant}
          />


          <AddItem onAddItem = {addItem}/>
      </div>
    );
  
}

export default App;