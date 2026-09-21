import React from 'react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onViewDetails
}) => {
  if (!product) return null;

  return (
    <>
      <div
        id="quick-view-backdrop"
        className={`fixed inset-0 z-50 bg-primary-container/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        id="quick-view-modal"
        className={`fixed bottom-0 left-0 right-0 z-50 bg-surface rounded-t-3xl shadow-[0_-16px_36px_-6px_rgba(45,38,34,0.2)] transition-transform duration-300 ease-out flex flex-col max-h-[85vh] overflow-hidden pb-safe ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Header */}
        <div className="p-3 flex justify-between items-center bg-surface sticky top-0 z-10 px-margin-mobile border-b border-surface-variant/30">
          <span className="font-label-caps text-[10px] text-outline tracking-wider font-semibold">
            QUICK RITUAL PREVIEW
          </span>
          <button
            aria-label="Close Preview"
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-margin-mobile pb-6 pt-3 flex flex-col gap-3">
          <div className="w-full aspect-[4/3] rounded-2xl bg-surface-container-low overflow-hidden relative shadow-sm">
            <img
              className="w-full h-full object-cover"
              alt={product.name}
              src={product.image}
            />
            {product.discountBadge && (
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md font-label-caps text-[10px] font-bold text-secondary shadow-xs">
                {product.discountBadge}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span
                className="material-symbols-outlined text-secondary text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-label-md text-xs font-semibold text-on-surface">
                {product.rating} ({typeof product.reviewCount === 'number' ? product.reviewCount.toLocaleString() : product.reviewCount})
              </span>
            </div>
            <span className="font-body-sm text-[11px] text-secondary font-medium">
              Lab Verified Formulation
            </span>
          </div>

          <h3 className="font-headline-sm text-lg font-semibold text-primary">
            {product.name}
          </h3>

          <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
            {product.subtitle || product.description}
          </p>

          <div className="flex items-baseline gap-2 py-1">
            <span className="font-headline-sm text-xl font-bold text-primary">
              ₹{product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="font-body-sm text-xs text-outline line-through">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="font-body-sm text-[10px] text-outline">
              Inclusive of all taxes
            </span>
          </div>

          <div className="p-3 rounded-xl bg-surface-container-low flex items-center gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0">
              eco
            </span>
            <span className="font-body-sm text-[11px] text-on-surface">
              Formulated without fragrance, sulfates, phthalates, or microplastics. Barrier pH 5.5.
            </span>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              className="flex-1 h-12 rounded-full bg-primary text-on-primary font-label-md text-sm font-medium flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              Add to Ritual Cart
            </button>

            <button
              className="px-4 h-12 rounded-full bg-surface-container text-on-surface font-label-md text-xs font-semibold hover:bg-surface-container-high transition-colors active:scale-98 flex items-center justify-center"
              onClick={() => {
                onViewDetails(product);
                onClose();
              }}
            >
              Full Ritual
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
