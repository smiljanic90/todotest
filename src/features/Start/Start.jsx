import React from 'react';
import { useNavigate } from 'react-router-dom';
import './start.style.css';
import Button from '../../components/button/Button';

const Start = () => {
  const router = useNavigate();

  const redirectToTODO = () => {
    router('/create');
  };
  return (
    <div className="start">
      <h1>Šta planiraš danas?</h1>
      <p>Kreiraj svoj novi task!</p>
      <Button label="Kreiraj task" onClickHandler={redirectToTODO} />
    </div>
  );
};

export default Start;
