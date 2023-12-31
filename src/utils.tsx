/* eslint-disable sonarjs/no-duplicate-string */
import { Favorite, Hotel, HourglassBottom } from '@mui/icons-material';
import { ColorPaletteProp } from '@mui/joy';
import { AdmissionStatus } from './types/admissionStatus';

// https://github.com/mui/material-ui/blob/master/docs/data/joy/getting-started/templates/order-dashboard/utils.ts
export const openSidebar = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
  }
};

export const closeSidebar = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.removeProperty('--SideNavigation-slideIn');
    document.body.style.removeProperty('overflow');
  }
};

export const toggleSidebar = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--SideNavigation-slideIn');
    if (slideIn) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
};

export const admissionColorFromStatus = (status: AdmissionStatus) => {
  let element: React.ReactNode;
  let color: ColorPaletteProp;

  switch (status) {
    case 'admitted': {
      element = <Hotel fontSize='inherit' />;
      color = 'primary';
      break;
    }
    case 'waiting': {
      element = <HourglassBottom fontSize='inherit' />;
      color = 'warning';
      break;
    }
    case 'discharged': {
      element = <Favorite fontSize='inherit' />;
      color = 'success';
      break;
    }
  }

  return { element, color };
};

export const truncateString = (str: string, length: number) => {
  const dots = str.length > length ? '...' : '';
  return str.slice(0, Math.max(0, Math.min(length, str.length))) + dots;
};

// Format date as HH:MM if less than 24h ago, or {day} {short_month} if more
export const shortTimeFormat = (date: Date) => {
  const diff = Date.now() - date.getTime();

  // eslint-disable-next-line unicorn/prefer-ternary
  if (diff < 24 * 60 * 60 * 1000) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else {
    return date.toLocaleDateString([], { day: 'numeric', month: 'short' });
  }
};