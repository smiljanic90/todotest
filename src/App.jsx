import './App.css';
import Create from './features/Create/Create';
import About from './features/About/About';
import Navigation from './features/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './features/Home/Home';
import useNotificationStore from './stores/notification/notification.store';
import Notification from './components/notification/Notification';
import List from './features/Todos/List';

function App() {
  const { isOpen } = useNotificationStore();
  return (
    <>
      <BrowserRouter>
        {isOpen && <Notification />}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/tasks" element={<List />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
