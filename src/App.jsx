import './App.css';
import Create from './features/Create/Create';
import Tasks from './features/Tasks/Tasks';
import About from './features/About/About';
import Navigation from './features/navigation/Navigation';
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
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
