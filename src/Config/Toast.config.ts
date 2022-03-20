import { ToastOptions, ToastPosition } from 'react-toastify';

export const CLOSE_AFTER = 5000;
export const POSITION: ToastPosition = 'bottom-right';

export const TOAST_PARAMS: Record<string, ToastOptions> = {
  ERROR: {
    position: POSITION,
    autoClose: CLOSE_AFTER,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  },
  SUCCESS: {
    position: POSITION,
    autoClose: CLOSE_AFTER,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  },
};
