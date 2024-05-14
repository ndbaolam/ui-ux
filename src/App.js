import Dashboard from './pages/dashboard';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
