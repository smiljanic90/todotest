import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],
  dialog: {
    isOpen: false,
    item: null,
  },
  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
  markTodoCompleted: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, is_completed: !todo.is_completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  editTodo: (id, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      ),
    })),
  setDialog: (isOpen, item) => set({ dialog: { isOpen, item } }),
}));

export default useTodoStore;
