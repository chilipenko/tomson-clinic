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
import React, { useState } from 'react';
import './style.scss';

const BurgerMenu = ({ onClick }) => {
  const [status, setStatus] = useState('close');
  return (
    <nav>
      <div
        className="BurgerMenu__container"
        role="button"
        onClick={() =>{
          onClick() 
          setStatus(status === 'open' ? 'close' : 'open')
        }
        } 
      >
        <i className={status}></i>
        <i className={status}></i>
        <i className={status}></i>
      </div>
    </nav>
  );
};

export default BurgerMenu;
