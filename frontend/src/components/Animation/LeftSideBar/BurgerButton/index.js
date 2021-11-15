// import React from 'react';
// import './style.scss';

// const BurgerButton = ({ onClick }) => {
//   return (
//     <div
//       className="LeftSideBar__BurgerButton"
//       role="button"
//       onClick={onClick}
//     >
//       <i></i>
//       <i></i>
//       <i></i>
//     </div>
//   );
// };

// export default BurgerButton;
import React, { useContext, useState } from 'react';
import { LeftSideBarContext } from '..';
import './style.scss';

const BurgerMenu = ({ onClick }) => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
  // const [status, setStatus] = useState('close');
  return (
    <nav>
      <div
        className="BurgerMenu__container"
        role="button"
        onClick={() =>{
          console.log('click')
          onClick()
          setIsShowSidebar(!isShowSidebar)
        }
        } 
      >
        <i className={isShowSidebar ? 'open' : 'close'}></i>
        <i className={isShowSidebar ? 'open' : 'close'}></i>
        <i className={isShowSidebar ? 'open' : 'close'}></i>
      </div>
    </nav>
  );
};

export default BurgerMenu;
