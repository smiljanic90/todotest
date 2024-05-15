import { useState } from 'react';
import useTodoStore from '../../stores/todos/todos.store';
import './edit.style.css';
import Button from '../button/Button';
import useNotificationStore from '../../stores/notification/notification.store';
import { Dialog, DialogTitle } from '@mui/material';

const EditTodoModal = () => {
  const { setNotification } = useNotificationStore((state) => state);
  const { dialog, editTodo, setDialog } = useTodoStore();
  const { isOpen, item } = dialog;
  const [editedTitle, setEditedTitle] = useState(item.title || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (item) {
      editTodo(item.id, { title: editedTitle });
      setEditedTitle('');
      setDialog(false, null);
      setNotification(true, 'Task je uspješno ažuriran!', 'info');
    }
  };

  const handleClose = () => {
    setDialog(false, null);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          width: '100%',
          maxWidth: '400px',
          padding: '20px',
          borderRadius: '10px',
          position: 'relative',
        },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Edituj task
      </DialogTitle>
      <span onClick={handleClose} className="closeIcon">
        X
      </span>
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
