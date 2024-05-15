import Header from "../Header";
import Sider from "../Sider";

const Layout = ({ children }) => {
  return (
    <>
      <Sider/>
      {<Header title={"Header"}/>}
      {children}
    </>
  );
}

export default Layout;