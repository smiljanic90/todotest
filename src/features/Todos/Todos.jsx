import React from 'react';
import TODOHero from './components/TodoHero';
import TODOList from './components/TodoList';
import EditTodoModal from '../../components/dialog/EditTodoModal';
import useTodoStore from '../../stores/todos/todos.store';
import './todos.style.css';

const Todos = () => {
  const dialog = useTodoStore((state) => state.dialog);
  return (
    <div className="tasks">
      {dialog.isOpen && <EditTodoModal />}
      <TODOHero />
      <TODOList />
    </div>
  );
};

export default Todos;
