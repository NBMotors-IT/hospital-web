/* eslint-disable sonarjs/no-duplicate-string */

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
