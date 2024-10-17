import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logo.style.css';

const LogoIcon = () => {
  const router = useNavigate();
  const handleClickCart = () => {
    router('/');
  };
  return (
    <div className="logo_icon" onClick={() => handleClickCart()}>
      <img
        src="https://cdn6.aptoide.com/imgs/9/3/a/93a70ebb221ab4a4295ca2745a8da9a9_icon.png"
        alt="Logo Icon"
      />
    </div>
  );
};

export default LogoIcon;
