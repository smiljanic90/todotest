import './App.css';
import Todos from './features/Todos/Todos';
import Create from './features/Create/Create';
import About from './features/About/About';
import Navigation from './features/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './features/Start/Start';
import useNotificationStore from './stores/notification/notification.store';
import Notification from './components/notification/Notification';

function App() {
  const isOpen = useNotificationStore((state) => state.isOpen);
  return (
    <>
      <BrowserRouter>
        {isOpen && <Notification />}
        <Navigation />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/create" element={<Create />} />
          <Route path="/tasks" element={<Todos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
