import { create } from 'zustand';

const useTodoStore = create((set, get) => ({
  todos: [],
  dialog: {
    isOpen: false,
    item: null,
  },
  addTodo: (newTodo) => {
    const todos = get().todos;
    set({ todos: [...todos, newTodo] });
  },
  markTodoCompleted: (id) => {
    const todos = get().todos;
    set({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, is_completed: !todo.is_completed } : todo
      ),
    });
  },
  deleteTodo: (id) => {
    const todos = get().todos;
    set({ todos: todos.filter((todo) => todo.id !== id) });
  },

  editTodo: (id, updatedTodo) => {
    const todos = get().todos;
    set({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      ),
    });
  },
  setDialog: (isOpen, item) => set({ dialog: { isOpen, item } }),
}));

export default useTodoStore;
