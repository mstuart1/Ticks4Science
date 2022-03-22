import React from 'react';
import { DropdownLink, DropdownMenu, DropdownMenuItem } from './DropdownStyled'


function Dropdown({menuItems = [], handleClick}) {

  return (
    
      <DropdownMenu
        onClick={ () => handleClick()}
      >
        
        {menuItems.map(item => {
          
          return (
            <DropdownMenuItem key={item.id}>
              <DropdownLink
                to={item.path}
                onClick={() => handleClick(item.id)}
              >
                {item.title}
              </DropdownLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenu>
    
  );
}

export default Dropdown;
