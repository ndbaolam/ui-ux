import Dashboard from './pages/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KPI from './pages/kpi';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/kpi" element={<KPI/>} />
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
