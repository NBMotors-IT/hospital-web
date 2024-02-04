import * as React from 'react';
import { NavLink as NavLinkBase, To } from 'react-router-dom';

import { ListItemButton, ListItemDecorator, Typography } from '@mui/joy';
import { closeSidebar } from '../../utils';

interface NavLinkBaseProps {
  className: string,
  to: To,
  dontCloseSidebar?: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

interface Props {
  to: To,
  text: string,
  disabled?: boolean,
  children?: React.ReactNode,
}

// eslint-disable-next-line react/display-name
const SidebarNavLinkBase = React.forwardRef<HTMLAnchorElement, NavLinkBaseProps>(({ className = '', to, dontCloseSidebar = false, ...other }: NavLinkBaseProps, ref) => (
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

function SidebarNavLink({ to, text, disabled = false, children }: Props) {
  return (
    <ListItemButton color='primary' sx={{ borderRadius: 'sm' }} component={SidebarNavLinkBase} to={to} disabled={disabled}>
      <ListItemDecorator>
        {children}
      </ListItemDecorator>
      <Typography textColor={disabled ? 'neutral.400' : 'neutral'} level='title-sm'>{text}</Typography>
    </ListItemButton>
  );
}

export default SidebarNavLink;
