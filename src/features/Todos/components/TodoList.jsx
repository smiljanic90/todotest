import useTodoStore from '../../../stores/todos/todos.store';
import Item from './TodoItem';

const TODOList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={index} item={item} todos={todos} />
        ))
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
};

export default TODOList;
