import React from 'react';
import './App.css';
import MainView from './MainView';
import TextIncreaseDecrease from './TextIncreaseDecrease';
import DropDownSelect from './DropDownSelect';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <MainView />
      <hr />
      <TextIncreaseDecrease />
      <hr />
      <DropDownSelect />
<hr />
      <TodoList />
    </div>
  );
}

export default App;
