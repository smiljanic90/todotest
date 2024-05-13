import { Link } from 'react-router-dom';
import './navigation.style.css';
import CartIcon from '../../components/cartIcon/CartIcon';

const Navigation = () => {
  return (
    <div className="navigation">
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
        }}
      >
        <Link to={{ pathname: '/' }}>Početna</Link>
        <Link to={{ pathname: '/create' }}>Kreiraj task</Link>
        <Link to={{ pathname: '/tasks' }}>Lista taskova</Link>
        <Link to={{ pathname: '/posts' }}>O nama</Link>
      </div>
      {/* <CartIcon /> */}
    </div>
  );
};

export default Navigation;
