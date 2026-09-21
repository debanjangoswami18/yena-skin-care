import React from 'react';
import { Product } from '../types';
import { PRODUCTS, ROUTINE_BUNDLE } from '../data/products';

interface OffersViewProps {
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onAddRoutineBundle: () => void;
  showToast: (msg: string) => void;
}

export const OffersView: React.FC<OffersViewProps> = ({
  onAddToCart,
  onSelectProduct,
  onAddRoutineBundle,
  showToast
}) => {
  const coupons = [
    {
      code: 'GLOW20',
      title: 'Flat 20% OFF Site-wide',
      desc: 'Applicable on all serums, cleansers, and sunscreens. No minimum cart value.',
      badge: 'POPULAR'
    },
    {
      code: 'RITUAL100',
      title: '₹100 Off First Ritual',
      desc: 'Welcome offer for new patrons on orders above ₹500.',
      badge: 'NEW PATRONS'
    },
    {
      code: 'FREESHIP',
      title: 'Free Express Shipping',
      desc: 'Automatic express air-dispatch across India with temperature control.',
      badge: 'UNLIMITED'
    }
  ];

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText?.(code);
    showToast(`Coupon code ${code} copied to clipboard!`);
  };

  const discountedProducts = PRODUCTS.filter(p => p.discountBadge);

  return (
    <div className="px-margin-mobile py-4 flex flex-col w-full pb-28 gap-5">
      <div>
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
          Apothecary Deals
        </span>
        <h2 className="font-headline-md text-headline-md text-primary mt-0.5">
          Festive Offers & Bundles
        </h2>
      </div>

      {/* Hero Offer Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-primary-container text-on-primary p-5 shadow-lg">
        <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-secondary/30 blur-xl pointer-events-none" />
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/20 text-secondary-fixed text-[10px] font-label-caps">
          <span className="material-symbols-outlined text-[13px]">auto_awesome</span>
          LIMITED TIME
        </span>
        <h3 className="font-headline-md text-lg text-white font-semibold mt-2">
          Glow More, Spend Less
        </h3>
        <p className="font-body-md text-xs text-on-primary-container mt-1">
          Save up to 22% on dermatologist-crafted botanical formulations. Plus complimentary silk headband with orders above ₹1,299.
        </p>
      </div>

      {/* Coupons Section */}
      <div className="flex flex-col gap-2.5">
        <span className="font-label-caps text-[11px] text-outline uppercase font-semibold">
          Active Promo Codes
        </span>
        {coupons.map(c => (
          <div
            key={c.code}
            className="p-3.5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center justify-between gap-3 border border-surface-variant/30"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-sm font-bold text-primary font-mono tracking-wider">
                  {c.code}
                </span>
                <span className="font-label-caps text-[9px] px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-bold">
                  {c.badge}
                </span>
              </div>
              <span className="font-label-md text-xs font-semibold text-primary mt-0.5">
                {c.title}
              </span>
              <span className="font-body-sm text-[10px] text-outline mt-0.5">
                {c.desc}
              </span>
            </div>

            <button
              onClick={() => handleCopyCode(c.code)}
              className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-xs font-semibold hover:bg-surface-container-high transition-colors active:scale-95 flex-shrink-0"
            >
              Copy
            </button>
          </div>
        ))}
      </div>

      {/* Routine Bundle Deal */}
      <div className="p-4 rounded-2xl bg-surface-container-high flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-label-caps text-[10px] text-secondary font-bold uppercase">
              {ROUTINE_BUNDLE.tag}
            </span>
            <h3 className="font-headline-sm text-base text-on-surface font-semibold">
              {ROUTINE_BUNDLE.title}
            </h3>
          </div>
          <span className="bg-secondary text-on-secondary font-label-sm text-xs px-2.5 py-1 rounded-full font-bold">
            {ROUTINE_BUNDLE.badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {ROUTINE_BUNDLE.steps.map((st, i) => (
            <div
              key={i}
              className="flex-1 bg-surface-container-lowest p-2 rounded-xl flex flex-col items-center shadow-xs"
            >
              <img className="w-12 h-12 object-cover rounded-md mb-1" alt={st.step} src={st.image} />
              <span className="font-label-sm text-[10px] font-semibold text-primary truncate w-full text-center">
                {st.step}
              </span>
              <span className="font-body-sm text-[10px] text-outline">₹{st.price}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onAddRoutineBundle}
          className="w-full h-11 rounded-full bg-primary text-on-primary font-label-md text-xs font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-transform"
        >
          <span>Get Routine for ₹{ROUTINE_BUNDLE.totalPrice}</span>
          <span className="line-through text-on-primary-container text-[11px]">
            ₹{ROUTINE_BUNDLE.originalTotal}
          </span>
        </button>
      </div>

      {/* Discounted Products Grid */}
      <div className="flex flex-col gap-2">
        <span className="font-label-caps text-[11px] text-outline uppercase font-semibold">
          Discounted Formulas
        </span>
        <div className="grid grid-cols-2 gap-3">
          {discountedProducts.map(p => (
            <div
              key={p.id}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs flex flex-col justify-between"
            >
              <div
                className="w-full aspect-[4/5] bg-surface-container overflow-hidden cursor-pointer relative"
                onClick={() => onSelectProduct(p)}
              >
                <img className="w-full h-full object-cover" alt={p.name} src={p.image} />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-caps text-[9px] font-bold">
                  {p.discountBadge}
                </span>
              </div>
              <div className="p-2.5 flex flex-col gap-1">
                <h4
                  className="font-headline-sm text-xs text-primary font-semibold line-clamp-1 cursor-pointer"
                  onClick={() => onSelectProduct(p)}
                >
                  {p.name}
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-sm text-xs font-bold text-primary">₹{p.price}</span>
                    <span className="font-body-sm text-[10px] text-outline line-through">₹{p.originalPrice}</span>
                  </div>
                  <button
                    onClick={() => onAddToCart(p)}
                    className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-90"
                  >
                    <span className="material-symbols-outlined text-[14px]">add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
