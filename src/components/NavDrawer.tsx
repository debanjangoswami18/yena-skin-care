import React from 'react';
import { BRAND_LOGO, USER_AVATAR } from '../data/products';

interface NavDrawerProps {
  isOpen: boolean;
  activePath: string;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const NavDrawer: React.FC<NavDrawerProps> = ({
  isOpen,
  activePath,
  onClose,
  onNavigate
}) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'shop-all', label: 'Shop All' },
    { id: 'categories', label: 'Categories' },
    { id: 'best-sellers', label: 'Best Sellers' },
    { id: 'offers-and-deals', label: 'Offers & Deals', badge: 'SALE' }
  ];

  const secondaryLinks = [
    { id: 'about-us', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
    { id: 'profile', label: 'Account' }
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        id="nav-backdrop"
        className={`fixed inset-0 z-50 bg-primary-container/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        id="nav-drawer"
        className={`fixed top-0 left-0 bottom-0 z-50 w-4/5 max-w-sm bg-surface shadow-[0_16px_36px_-6px_rgba(45,38,34,0.15)] transition-transform duration-300 ease-out flex flex-col justify-between pt-safe pb-safe overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-margin-mobile flex flex-col">
          <div className="flex items-center justify-between pb-space-lg">
            <img
              alt="YENA Skincare Brand Logo"
              className="h-7 w-auto object-contain"
              src={BRAND_LOGO}
            />
            <button
              id="drawer-close-btn"
              aria-label="Close Drawer"
              className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95"
              onClick={onClose}
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-1">
            {menuItems.map(item => {
              const isActive = activePath === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`flex items-center justify-between py-3 px-space-sm rounded-lg text-left transition-colors font-headline-sm text-base ${
                    isActive
                      ? 'text-secondary font-semibold bg-surface-container/60'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-label-caps">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  <span className="material-symbols-outlined text-sm text-outline">
                    arrow_forward_ios
                  </span>
                </button>
              );
            })}

            <div className="my-space-md h-px bg-surface-variant/40" />

            {secondaryLinks.map(link => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => {
                  onNavigate(link.id);
                  onClose();
                }}
                className="py-2.5 px-space-sm rounded-lg text-on-surface-variant hover:text-on-surface font-body-md transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-margin-mobile bg-surface-container-low flex items-center gap-space-sm border-t border-surface-variant/30">
          <img
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover ring-1 ring-outline-variant/30"
            src={USER_AVATAR}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-sm text-on-surface">YENA Ritual Member</span>
            <span className="font-body-sm text-outline">Apothecary Tier • 240 Pts</span>
          </div>
        </div>
      </aside>
    </>
  );
};
