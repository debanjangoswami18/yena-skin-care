import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface WishlistViewProps {
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onNavigate: (view: string) => void;
}

export const WishlistView: React.FC<WishlistViewProps> = ({
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
  onNavigate
}) => {
  const wishlistedProducts = PRODUCTS.filter(p => wishlistIds.has(p.id));

  if (wishlistedProducts.length === 0) {
    return (
      <div className="px-margin-mobile py-20 flex flex-col items-center text-center gap-4">
        <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined text-[36px]">favorite</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary">
          Your Wishlist is Empty
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
          Tap the heart on any formula while browsing to curate your personalized future skincare rituals.
        </p>
        <button
          onClick={() => onNavigate('shop-all')}
          className="mt-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-sm shadow-md active:scale-95 transition-transform"
        >
          Explore Botanical Formulas
        </button>
      </div>
    );
  }

  return (
    <div className="px-margin-mobile py-4 flex flex-col w-full pb-28">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
            Saved Formulations
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-0.5">
            Your Wishlist ({wishlistedProducts.length})
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {wishlistedProducts.map(prod => (
          <div
            key={prod.id}
            className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm relative group"
          >
            <div
              className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden cursor-pointer"
              onClick={() => onSelectProduct(prod)}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={prod.name}
                src={prod.image}
              />
              <button
                aria-label="Remove from wishlist"
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-secondary shadow-sm active:scale-90"
                onClick={e => {
                  e.stopPropagation();
                  onToggleWishlist(prod);
                }}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
              </button>
            </div>

            <div className="p-3 flex flex-col flex-grow justify-between gap-2">
              <div className="cursor-pointer" onClick={() => onSelectProduct(prod)}>
                <h3 className="font-headline-sm text-sm text-primary font-semibold line-clamp-1">
                  {prod.name}
                </h3>
                <span className="font-headline-sm text-sm text-primary font-bold mt-1 block">
                  ₹{prod.price}
                </span>
              </div>

              <button
                onClick={() => {
                  onAddToCart(prod);
                  onToggleWishlist(prod);
                }}
                className="w-full h-9 rounded-full bg-primary text-on-primary font-label-md text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                Move to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
