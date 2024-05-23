import React from 'react';
import loginBannerImage from '../../assets/images/banner.jpg';
import './LoginBanner.css';

function LoginBanner() {
  return (
    <div className="login-banner">
      <img src={loginBannerImage} alt="Banner" />
    </div>
  );
}

export default LoginBanner;