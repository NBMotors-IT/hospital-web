import * as React from 'react';
import { NavLink as NavLinkBase, To } from 'react-router-dom';
import { closeSidebar } from '../../utils';

interface Props {
  className: string,
  to: To,
  dontCloseSidebar?: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x:string]: any;
}

// eslint-disable-next-line react/display-name
const SidebarNavLink = React.forwardRef<HTMLAnchorElement, Props>(({ className = '', to, dontCloseSidebar = false, ...other }: Props, ref) => (
  <NavLinkBase
    ref={ref}
    to={to}
    {...other}
    style={{ textDecoration: 'none' }}
    onClick={() => {
      if (!dontCloseSidebar) closeSidebar();
    }}
    className={({ isActive }) => (isActive ? className + ' Mui-selected' : className)}
    end
  />
));

export default SidebarNavLink;
