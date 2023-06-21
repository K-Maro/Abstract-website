import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuIconClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <header className="header">
      <div className="topbar_inner">
        <div className="topbar_logo-wrapper">
          <img className="logo-icon" src="./images/logo.png" alt="logo-icon" ></img>
          <a className="topbar_logo">Abstract</a>
          <a className="topbar__helpcenter" title="Home">
            Help Center
          </a>
        </div>
        <div className="topbar_buttons" id="menu">
          {isMobile ? (
            <button id="menuicon">
              <img className="menu-icon-image" src="./images/navigation.png" alt="my image" onClick={handleMenuIconClick}/>
            </button>
          ) : (
            <>
              <button className="request_button">Submit a request</button>
              <button className="sign_in">Sign in</button>
            </>
          )}
        </div>
      </div>
      {isMobile && showButtons && (
        <div className="mobile_buttons">
          <button className="request_button">Submit a request</button>
          <button className="sign_in">Sign in</button>
        </div>
      )}
    </header>
  );
}
