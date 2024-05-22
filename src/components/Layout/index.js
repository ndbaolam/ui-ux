import Header from "../Header";
import Sider from "../Sider";
import './style.css';

const Layout = ({ children }) => {
  return (
    <>
      <Sider/>
      {<Header title={"Header"}/>}
      <main>
        <div className="main">
          {children}
        </div>
      </main>
    </>
  );
}

export default Layout;