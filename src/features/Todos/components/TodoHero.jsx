import React from 'react';
import '../todos.style.css';
import useTodoStore from '../../../stores/todos/todos.store';

const TODOHero = () => {
  const todos = useTodoStore((state) => state.todos);

  // Calculate completed todos count
  const todos_completed = todos.filter((todo) => todo.is_completed).length;
  const total_todos = todos.length;

  return (
    <section className="todohero_section">
      <div>
        <p className="text_large">Gotovi taskovi!</p>
        <p className="text_small">Nastavi tako!</p>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
};

export default TODOHero;
