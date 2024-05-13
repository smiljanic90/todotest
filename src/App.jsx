import './App.css';
import Todos from './features/Todos/Todos';
import Create from './features/Create/Create';
import About from './features/About/About';
import Navigation from './features/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './features/Start/Start';

function App() {
  return (
    <>
      <BrowserRouter>
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
