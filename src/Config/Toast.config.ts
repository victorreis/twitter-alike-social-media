import { ToastOptions } from 'react-toastify';

const CLOSE_AFTER = 5000;

export const TOAST_PARAMS: Record<string, ToastOptions> = {
  ERROR: {
    position: 'top-right',
    autoClose: CLOSE_AFTER,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  },
  SUCCESS: {
    position: 'top-right',
    autoClose: CLOSE_AFTER,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  },
};
