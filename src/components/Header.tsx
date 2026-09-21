import React from 'react';
import { BRAND_LOGO, USER_AVATAR } from '../data/products';

interface HeaderProps {
  mode?: 'default' | 'pdp';
  title?: string;
  cartCount: number;
  wishlistCount: number;
  onOpenMenu: () => void;
  onNavigate: (view: string) => void;
  onBack?: () => void;
  onShare?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mode = 'default',
  title = 'Product Details',
  cartCount,
  wishlistCount,
  onOpenMenu,
  onNavigate,
  onBack,
  onShare
}) => {
  if (mode === 'pdp') {
    return (
      <header className="fixed top-0 w-full z-40 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-margin-mobile flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <button
              id="pdp-back-btn"
              aria-label="Go Back"
              className="w-11 h-11 flex items-center justify-center rounded-full text-primary hover:bg-surface-container transition-colors active:scale-95"
              onClick={onBack}
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <img
                alt="YENA Skincare Brand Logo"
                className="h-6 w-auto object-contain hidden sm:inline-block"
                src={BRAND_LOGO}
              />
              <h1 className="font-headline-sm text-base text-on-surface tracking-wide truncate max-w-[180px]">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <button
              id="pdp-share-btn"
              aria-label="Share Product"
              className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95"
              onClick={onShare}
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </button>
            <button
              id="pdp-profile-btn"
              aria-label="Profile"
              onClick={() => onNavigate('profile')}
              className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-outline-variant/30 hover:opacity-90 transition-opacity"
            >
              <img alt="Profile" className="w-full h-full object-cover" src={USER_AVATAR} />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full z-40 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-margin-mobile flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <button
            id="menu-open-btn"
            aria-label="Open Navigation Menu"
            className="w-11 h-11 flex items-center justify-center rounded-full text-primary hover:bg-surface-container transition-colors active:scale-95"
            onClick={onOpenMenu}
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
        </div>

        <div className="flex items-center justify-center cursor-pointer" onClick={() => onNavigate('home')}>
          <img
            alt="YENA Skincare Brand Logo"
            className="h-8 w-auto object-contain"
            src={BRAND_LOGO}
          />
        </div>

        <div className="flex items-center gap-1">
          <button
            id="header-search-btn"
            aria-label="Search Products"
            className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95"
            onClick={() => onNavigate('shop-all')}
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>

          <button
            id="header-wishlist-btn"
            aria-label="Wishlist"
            className="relative w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95"
            onClick={() => onNavigate('wishlist')}
          >
            <span className="material-symbols-outlined text-[22px]">favorite</span>
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-secondary text-on-secondary font-label-sm text-[10px] leading-4 flex items-center justify-center font-bold animate-pulse">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            id="header-cart-btn"
            aria-label="Shopping Cart"
            className="relative w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors active:scale-95"
            onClick={() => onNavigate('cart')}
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-primary text-on-primary font-label-sm text-[10px] leading-4 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            id="header-user-btn"
            aria-label="User Account"
            className="w-11 h-11 flex items-center justify-center"
            onClick={() => onNavigate('profile')}
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant/30 hover:opacity-90 transition-opacity"
              src={USER_AVATAR}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
