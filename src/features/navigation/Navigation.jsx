import { Link } from 'react-router-dom';
import './navigation.style.css';
import LogoIcon from '../../components/logoIcon/LogoIcon';
const Navigation = () => {
  return (
    <div className="navigation">
      <LogoIcon />
      <div className="navigation_holder">
        <Link to={{ pathname: '/' }}>Početna</Link>
        <Link to={{ pathname: '/create' }}>Kreiraj task</Link>
        <Link to={{ pathname: '/tasks' }}>Lista taskova</Link>
        <Link to={{ pathname: '/about' }}>O nama</Link>
      </div>
    </div>
  );
};

export default Navigation;
