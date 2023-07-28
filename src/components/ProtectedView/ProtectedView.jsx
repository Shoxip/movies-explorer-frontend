import React from 'react';
import './ProtectedView.css'
const ProtectedView = ({children, isLoggedIn, isAuthNeeded}) => {
    return (
      !isLoggedIn || !isAuthNeeded
        ?
          (<div className={'center'}>
            <h1>У вас нет доступа к этой страничке</h1>
          </div>)
        : <>{children}</>


    );
};

export default ProtectedView;
