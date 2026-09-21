import React from 'react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info' | 'error';
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => {
  if (!message) return null;

  return (
    <div
      id="global-toast"
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 transform bg-primary text-on-primary px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 max-w-[90vw] animate-in fade-in slide-in-from-top-4"
    >
      <span
        className={`material-symbols-outlined text-[18px] ${
          type === 'error' ? 'text-error-container' : 'text-secondary-fixed'
        }`}
      >
        {type === 'error' ? 'error' : 'check_circle'}
      </span>
      <span className="font-body-sm text-xs font-medium tracking-wide truncate">
        {message}
      </span>
    </div>
  );
};
