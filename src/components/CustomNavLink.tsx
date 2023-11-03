import React from 'react';
import { NavLink as NavLinkBase } from 'react-router-dom'; 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomNavLink = React.forwardRef<any, any>((props, ref) => (
  <NavLinkBase
    ref={ref}
    {...props}
    style={{ textDecoration: 'none' }}
    className={({ isActive }) => (isActive ? props.className + ' Mui-selected' : props.className)}
    end
  />
));

export default CustomNavLink;