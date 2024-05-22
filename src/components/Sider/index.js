import './style.css';
import { 
  IconCalender,
  IconDashboard,
  IconKPI,
  IconObj,
  IconSetting,
  IconSignOut,
} from '../../assets/index';
import logo from '../../assets/image 10.png';
import { FcMenu } from "react-icons/fc";
import { useState } from 'react';

export const Sider = () => {
  const [css, setCss] = useState({});
  const [cssBtn, setCssBtn] = useState({});

  const handleClick = () => {
    setCss({
      width: '20%',
      transition: 'all 0.2s ease-in-out',
      left: '0%',
    });

    setCssBtn({
      display: 'block'
    })
  }

  const handleClickBtn = () => {
    setCss({
      width: '23%',
      transition: 'all 0.2s ease-in-out',
      left: '-200px',
    });

    setCssBtn({
      display: 'none'
    })
  }

  return (
    <>
      <div className='mobile-side' onClick={handleClick}>
        <FcMenu className='icon-side' />
      </div>
      <div className='sider' style={css}>      
      <div className='side-close'>
          <button onClick={handleClickBtn}
          style={cssBtn}
          > {'x'} </button>
        </div>  
        <div className='inner-logo'>
          <img src={logo}/>
        </div>        
        <div className='inner-content'>
            <div className='inner-item'>
              <IconDashboard />
              <p>Dashboard</p>
            </div>
            <div className='inner-item'>
              <IconCalender />
              <p>Lịch</p>
            </div>
            <div className='inner-item'>
              <IconKPI />
              <p>KPIs</p>
            </div>
            <div className='inner-item'>
              <IconObj />
              <p>Mục tiêu</p>
            </div>
            <div className='inner-item'>
              <IconSetting />
              <p>Cài đặt</p>
            </div>
            <div className='inner-item sign-out'>
              <IconSignOut/>
              <p>Đăng xuất</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sider;