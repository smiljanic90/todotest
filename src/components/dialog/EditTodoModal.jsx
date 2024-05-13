import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import useTodoStore from '../../stores/todos/todos.store';
import './edit.style.css';
import Button from '../button/Button';

const EditTodoModal = () => {
  const { dialog, editTodo, setDialog } = useTodoStore();
  const { isOpen, item } = dialog;
  const [editedTitle, setEditedTitle] = useState(item.title || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (item) {
      editTodo(item.id, { title: editedTitle });
      setEditedTitle('');
      setDialog(false, null);
    }
  };

  return (
    <Dialog
      appendTo="self"
      header="Uredi Todo"
      visible={isOpen && item}
      style={{
        width: '50vw',
        backgroundColor: 'white',
        color: 'black',
        padding: '1rem',
        borderRadius: '10px',
      }}
      onHide={() => setDialog(false, null)}
    >
      <div className="dialogForm">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="todo">
            <input
              type="text"
              name="todo"
              id="todo"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </label>
          <Button label="Sačuvaj" />
        </form>
      </div>
    </Dialog>
  );
};

export default EditTodoModal;
