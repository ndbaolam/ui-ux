import Header from './components/Header';
import Sider from './components/Sider';
import './App.css';

function App() {
  return (
    <>
      <Sider/>
      {<Header title={"Header"}/>}
    </>
  );
}

export default App;
