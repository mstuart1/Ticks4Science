import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown({menuItems = []}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {menuItems.map(item => {
          return (
            <li key={item.id}>
              <Link
                className={item.cName || 'dropdown-link'}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    
  );
}

export default Dropdown;
