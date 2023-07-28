import React from 'react';
import './ProtectedView.css'
const ProtectedView = ({children, isLoggedIn}) => {
    return (
      !isLoggedIn
        ?
          (<div className={'center'}>
            <h1>У вас нет доступа к этой страничке</h1>
          </div>)
        : <>{children}</>


    );
};

export default ProtectedView;
