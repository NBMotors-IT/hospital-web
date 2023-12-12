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
    case 'admitted':
      element = <Hotel fontSize='inherit' />;
      color = 'primary';
      break;
    case 'waiting':
      element = <HourglassBottom fontSize='inherit' />;
      color = 'warning';
      break;
    case 'discharged':
      element = <Favorite fontSize='inherit' />;
      color = 'success';
      break;
  }

  return { element, color };
}