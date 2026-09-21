import React from 'react';

interface BottomNavProps {
  currentTab: string;
  cartCount: number;
  wishlistCount: number;
  onSelectTab: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  cartCount,
  wishlistCount,
  onSelectTab
}) => {
  return (
    <nav
      id="bottom-nav-bar"
      className="fixed bottom-0 left-0 right-0 w-full z-40 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(45,38,34,0.05)] border-t border-surface-variant/30"
    >
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-space-xs">
        {/* Home */}
        <button
          id="tab-home"
          aria-label="Home"
          onClick={() => onSelectTab('home')}
          className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 transition-colors active:scale-95 ${
            currentTab === 'home'
              ? 'text-secondary font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: currentTab === 'home' ? "'FILL' 1" : "'FILL' 0" }}
          >
            home
          </span>
          <span className="font-label-sm text-[10px]">Home</span>
        </button>

        {/* Shop */}
        <button
          id="tab-shop"
          aria-label="Shop All"
          onClick={() => onSelectTab('shop-all')}
          className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 transition-colors active:scale-95 ${
            currentTab === 'shop-all'
              ? 'text-secondary font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: currentTab === 'shop-all' ? "'FILL' 1" : "'FILL' 0" }}
          >
            spa
          </span>
          <span className="font-label-sm text-[10px]">Shop</span>
        </button>

        {/* Offers */}
        <button
          id="tab-offers"
          aria-label="Offers and Deals"
          onClick={() => onSelectTab('offers-and-deals')}
          className={`relative flex flex-col items-center justify-center gap-0.5 w-16 h-12 transition-colors active:scale-95 ${
            currentTab === 'offers-and-deals'
              ? 'text-secondary font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span className="absolute -top-1 px-1.5 py-0.2 rounded-full bg-secondary text-on-secondary font-label-caps text-[8px] tracking-tight">
            20% OFF
          </span>
          <span
            className="material-symbols-outlined text-[22px] mt-1"
            style={{ fontVariationSettings: currentTab === 'offers-and-deals' ? "'FILL' 1" : "'FILL' 0" }}
          >
            local_offer
          </span>
          <span className="font-label-sm text-[10px]">Offers</span>
        </button>

        {/* Wishlist */}
        <button
          id="tab-wishlist"
          aria-label="Wishlist"
          onClick={() => onSelectTab('wishlist')}
          className={`relative flex flex-col items-center justify-center gap-0.5 w-16 h-12 transition-colors active:scale-95 ${
            currentTab === 'wishlist'
              ? 'text-secondary font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: currentTab === 'wishlist' ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
          {wishlistCount > 0 && (
            <span className="absolute top-1 right-3 min-w-[14px] h-3.5 px-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-[9px] leading-3.5 flex items-center justify-center font-semibold">
              {wishlistCount}
            </span>
          )}
          <span className="font-label-sm text-[10px]">Wishlist</span>
        </button>

        {/* Cart */}
        <button
          id="tab-cart"
          aria-label="Shopping Cart"
          onClick={() => onSelectTab('cart')}
          className={`relative flex flex-col items-center justify-center gap-0.5 w-16 h-12 transition-colors active:scale-95 ${
            currentTab === 'cart'
              ? 'text-secondary font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: currentTab === 'cart' ? "'FILL' 1" : "'FILL' 0" }}
          >
            shopping_bag
          </span>
          {cartCount > 0 && (
            <span className="absolute top-1 right-3 min-w-[14px] h-3.5 px-0.5 rounded-full bg-primary text-on-primary font-label-sm text-[9px] leading-3.5 flex items-center justify-center font-semibold">
              {cartCount}
            </span>
          )}
          <span className="font-label-sm text-[10px]">Cart</span>
        </button>
      </div>
    </nav>
  );
};
