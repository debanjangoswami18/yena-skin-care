import React, { useState } from 'react';
import { CartItem, Product } from '../types';
import { PRODUCTS } from '../data/products';

interface CartScreenProps {
  items: CartItem[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onNavigate: (view: string) => void;
  onClearCart: () => void;
  showToast: (msg: string) => void;
}

export const CartScreen: React.FC<CartScreenProps> = ({
  items,
  onUpdateQty,
  onRemoveItem,
  onSelectProduct,
  onNavigate,
  onClearCart,
  showToast
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0); // percentage e.g. 20
  const [appliedPromoName, setAppliedPromoName] = useState<string>('');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 499;
  const isFreeShipping = subtotal >= freeShippingThreshold || items.length === 0;
  const shippingFee = isFreeShipping ? 0 : 49;
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'GLOW20') {
      setAppliedDiscount(20);
      setAppliedPromoName('GLOW20 (20% Off)');
      showToast('Promo code GLOW20 applied! 20% discount unlocked.');
    } else if (code === 'RITUAL100' && subtotal >= 500) {
      setAppliedDiscount(15);
      setAppliedPromoName('RITUAL100 (15% Off)');
      showToast('Promo code RITUAL100 applied!');
    } else {
      showToast('Invalid promo code. Try GLOW20 for 20% off.');
    }
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
    }, 2500);
  };

  if (items.length === 0 && !isOrderPlaced) {
    return (
      <div className="px-margin-mobile py-20 flex flex-col items-center text-center gap-4">
        <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined text-[36px]">shopping_bag</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary">
          Your Ritual Bag is Empty
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
          Discover dermatologist-tested botanical elixirs and craft your personalized mindful glow.
        </p>
        <button
          onClick={() => onNavigate('shop-all')}
          className="mt-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-sm shadow-md active:scale-95 transition-transform"
        >
          Explore All Formulas
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-32">
      {/* Free Shipping Progress Bar */}
      <section className="px-margin-mobile pt-3 pb-2 bg-surface-container-low border-b border-surface-variant/30">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="font-label-sm text-primary font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-secondary">local_shipping</span>
            {isFreeShipping
              ? 'You have unlocked FREE Express Delivery!'
              : `Add ₹${freeShippingThreshold - subtotal} more for FREE shipping`}
          </span>
          <span className="font-body-sm text-outline text-[10px]">
            {isFreeShipping ? '100%' : `${Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))}%`}
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
          <div
            className="h-full bg-secondary rounded-full transition-all duration-500"
            style={{
              width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`
            }}
          />
        </div>
      </section>

      {/* Bag Items List */}
      <section className="px-margin-mobile py-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-sm text-base text-primary font-semibold">
            Ritual Bag ({items.reduce((acc, i) => acc + i.quantity, 0)} items)
          </h2>
          <button
            onClick={() => onClearCart()}
            className="font-body-sm text-xs text-outline hover:text-error transition-colors"
          >
            Clear Bag
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {items.map(item => (
            <div
              key={item.product.id + (item.selectedVolume || '')}
              className="p-3 rounded-2xl bg-surface-container-lowest shadow-sm flex gap-3 relative"
            >
              <div
                className="w-20 h-24 rounded-xl bg-surface-container overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => onSelectProduct(item.product)}
              >
                <img
                  className="w-full h-full object-cover"
                  alt={item.product.name}
                  src={item.product.image}
                />
              </div>

              <div className="flex flex-col flex-1 justify-between min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-1">
                    <h3
                      className="font-headline-sm text-sm text-primary font-semibold line-clamp-1 cursor-pointer hover:text-secondary"
                      onClick={() => onSelectProduct(item.product)}
                    >
                      {item.product.name}
                    </h3>
                    <button
                      aria-label="Remove item"
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-outline hover:text-error transition-colors p-1"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                  <span className="font-body-sm text-[11px] text-outline">
                    {item.selectedVolume || item.product.volume || 'Standard'} • Unit ₹{item.price}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2 bg-surface-container px-2.5 py-1 rounded-full">
                    <button
                      aria-label="Decrease quantity"
                      className="w-5 h-5 flex items-center justify-center rounded-full text-primary hover:bg-surface-container-high transition-colors active:scale-90"
                      onClick={() => onUpdateQty(item.product.id, -1)}
                    >
                      <span className="material-symbols-outlined text-[14px]">remove</span>
                    </button>
                    <span className="font-label-md text-xs font-bold text-on-surface min-w-[14px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      aria-label="Increase quantity"
                      className="w-5 h-5 flex items-center justify-center rounded-full text-primary hover:bg-surface-container-high transition-colors active:scale-90"
                      onClick={() => onUpdateQty(item.product.id, 1)}
                    >
                      <span className="material-symbols-outlined text-[14px]">add</span>
                    </button>
                  </div>

                  <span className="font-headline-sm text-sm font-bold text-primary">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Code Input */}
      <section className="px-margin-mobile py-2">
        <form onSubmit={handleApplyPromo} className="flex gap-2">
          <input
            type="text"
            placeholder="Enter promo code (e.g. GLOW20)"
            value={promoCode}
            onChange={e => setPromoCode(e.target.value)}
            className="flex-1 h-11 px-4 rounded-full bg-surface-container-lowest text-on-surface font-body-md text-xs uppercase placeholder:normal-case placeholder:text-outline focus:outline-none shadow-xs"
          />
          <button
            type="submit"
            className="px-5 h-11 rounded-full bg-secondary text-on-secondary font-label-md text-xs font-semibold shadow-xs active:scale-95 transition-transform"
          >
            Apply
          </button>
        </form>
        {appliedDiscount > 0 && (
          <div className="flex items-center justify-between mt-2 px-3 py-1.5 rounded-lg bg-secondary-fixed/50 text-on-secondary-fixed text-xs">
            <span className="flex items-center gap-1 font-label-md">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              {appliedPromoName}
            </span>
            <button
              onClick={() => {
                setAppliedDiscount(0);
                setAppliedPromoName('');
              }}
              className="text-[11px] underline"
            >
              Remove
            </button>
          </div>
        )}
      </section>

      {/* Order Summary Card */}
      <section className="px-margin-mobile py-3">
        <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-2.5">
          <span className="font-label-caps text-[10px] text-outline uppercase font-semibold">
            Order Financials
          </span>

          <div className="flex items-center justify-between text-xs">
            <span className="font-body-md text-on-surface-variant">Bag Subtotal</span>
            <span className="font-label-md text-primary font-semibold">₹{subtotal}</span>
          </div>

          {appliedDiscount > 0 && (
            <div className="flex items-center justify-between text-xs text-secondary">
              <span className="font-body-md">Festive Promo Discount</span>
              <span className="font-label-md font-semibold">-₹{discountAmount}</span>
            </div>
          )}

          <div className="flex items-center justify-between text-xs">
            <span className="font-body-md text-on-surface-variant">Estimated Shipping</span>
            <span className="font-label-md font-semibold text-primary">
              {shippingFee === 0 ? (
                <span className="text-secondary uppercase text-[11px]">FREE</span>
              ) : (
                `₹${shippingFee}`
              )}
            </span>
          </div>

          <div className="h-px bg-surface-variant/40 my-1" />

          <div className="flex items-baseline justify-between">
            <div>
              <span className="font-headline-sm text-base font-bold text-primary">
                Estimated Total
              </span>
              <p className="font-body-sm text-[10px] text-outline">
                Includes all applicable taxes & duties
              </p>
            </div>
            <span className="font-headline-sm text-lg font-bold text-primary">
              ₹{grandTotal}
            </span>
          </div>
        </div>
      </section>

      {/* Suggested Add-ons */}
      <section className="px-margin-mobile py-2">
        <span className="font-label-caps text-[10px] text-secondary uppercase font-semibold">
          Complete Your Ritual
        </span>
        <div className="flex gap-2.5 overflow-x-auto pt-2 pb-1 no-scrollbar">
          {PRODUCTS.slice(3, 7).map(p => (
            <div
              key={p.id}
              className="w-36 flex-shrink-0 p-2 rounded-xl bg-surface-container-lowest shadow-xs flex flex-col justify-between"
            >
              <div
                className="w-full aspect-square rounded-lg bg-surface-container overflow-hidden cursor-pointer"
                onClick={() => onSelectProduct(p)}
              >
                <img className="w-full h-full object-cover" alt={p.name} src={p.image} />
              </div>
              <span
                className="font-label-md text-[11px] text-primary font-semibold line-clamp-1 mt-1.5 cursor-pointer"
                onClick={() => onSelectProduct(p)}
              >
                {p.name}
              </span>
              <div className="flex items-center justify-between mt-1">
                <span className="font-headline-sm text-xs text-primary font-bold">
                  ₹{p.price}
                </span>
                <button
                  onClick={() => onUpdateQty(p.id, 1)}
                  className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-90"
                >
                  <span className="material-symbols-outlined text-[14px]">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Bottom Checkout Bar */}
      <aside className="fixed bottom-16 left-0 right-0 z-40 bg-surface/90 backdrop-blur-xl px-margin-mobile py-3 border-t border-surface-variant/30 shadow-[0_-4px_16px_rgba(45,38,34,0.06)]">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="font-body-sm text-[10px] text-outline uppercase font-semibold">
              Total Payable
            </span>
            <span className="font-headline-sm text-lg font-bold text-primary">
              ₹{grandTotal}
            </span>
          </div>

          <button
            id="checkout-btn"
            onClick={() => setIsCheckoutModalOpen(true)}
            className="flex-1 h-12 rounded-full bg-primary text-on-primary font-label-md text-sm font-semibold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform hover:bg-secondary cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span>Proceed to Checkout</span>
          </button>
        </div>
      </aside>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-surface rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
            {!isOrderPlaced ? (
              <>
                <div className="flex items-center justify-between border-b border-surface-variant/30 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">
                      local_shipping
                    </span>
                    <h3 className="font-headline-sm text-base font-semibold text-primary">
                      Express Botanical Checkout
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsCheckoutModalOpen(false)}
                    className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>

                <div className="flex flex-col gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1">
                    <span className="font-label-md text-[11px] font-semibold text-primary">
                      Deliver to:
                    </span>
                    <p className="font-body-sm text-on-surface-variant">
                      Pooja Mehta • +91 98765 43210
                      <br />
                      Apothecary Villa, 14th Main, Indiranagar, Bangalore, 560038
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        verified_user
                      </span>
                      <span className="font-label-md text-primary">
                        Payment: Cash on Delivery / UPI
                      </span>
                    </div>
                    <span className="font-label-sm text-secondary font-bold">Verified</span>
                  </div>

                  <div className="flex items-center justify-between font-bold text-sm text-primary pt-1">
                    <span>Total Amount</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full h-12 rounded-full bg-primary text-on-primary font-label-md text-sm font-semibold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  Confirm & Place Ritual Order
                </button>
              </>
            ) : (
              <div className="py-6 flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center animate-bounce">
                  <span className="material-symbols-outlined text-[36px]">spa</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary">
                  Order Confirmed!
                </h3>
                <p className="font-body-md text-xs text-on-surface-variant max-w-[260px]">
                  Thank you for embracing botanical purity. Your order #YENA-8291 is being prepared in our climate-regulated apothecary lab.
                </p>
                <span className="font-label-sm text-[11px] text-secondary font-semibold">
                  Estimated delivery: 2-3 business days
                </span>
                <button
                  onClick={() => {
                    setIsCheckoutModalOpen(false);
                    setIsOrderPlaced(false);
                    onNavigate('home');
                  }}
                  className="mt-2 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-xs font-semibold"
                >
                  Back to Sanctuary
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
