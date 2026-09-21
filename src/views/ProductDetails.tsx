import React, { useState } from 'react';
import { Product } from '../types';
import { ROUTINE_BUNDLE, REVIEWS, TRANSFORMATION_PHOTOS } from '../data/products';

interface ProductDetailsProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onAddToCart: (product: Product, volume: string, price: number, qty: number) => void;
  onBuyNow: (product: Product, volume: string, price: number, qty: number) => void;
  onAddRoutineBundle: () => void;
  showToast: (msg: string) => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onBuyNow,
  onAddRoutineBundle,
  showToast
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSize, setSelectedSize] = useState<'30ml' | '50ml'>('30ml');
  const [quantity, setQuantity] = useState(1);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    acc1: true
  });
  const [activeReviewFilter, setActiveReviewFilter] = useState('recent');
  const [isZoomed, setIsZoomed] = useState(false);

  const gallery = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  const unitPrice = selectedSize === '50ml' ? 999 : 699;
  const originalUnitPrice = selectedSize === '50ml' ? 1399 : 899;
  const totalPrice = unitPrice * quantity;
  const totalOriginalPrice = originalUnitPrice * quantity;

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, unitPrice, quantity);
    showToast(`Added ${quantity}x ${product.name} (${selectedSize}) to Bag`);
  };

  const handleBuyNow = () => {
    onBuyNow(product, selectedSize, unitPrice, quantity);
  };

  return (
    <div className="flex flex-col w-full pb-28">
      {/* Gallery Carousel Area */}
      <section className="relative w-full overflow-hidden bg-surface-container-low">
        {/* Carousel Viewport */}
        <div
          id="carousel-track"
          className="flex w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {gallery.map((imgSrc, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 relative aspect-[4/5] bg-surface-container-low flex items-center justify-center cursor-pointer"
              onClick={() => setIsZoomed(true)}
            >
              <img
                className="w-full h-full object-cover"
                alt={`${product.name} slide ${idx + 1}`}
                src={imgSrc}
              />
            </div>
          ))}
        </div>

        {/* Floating Badges Top */}
        <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
          <span className="bg-primary text-on-primary font-label-caps text-label-caps uppercase px-3 py-1.5 rounded-full tracking-wider shadow-sm">
            Bestseller
          </span>
          <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-caps text-label-caps uppercase px-3 py-1.5 rounded-full tracking-wider">
            Clinical Grade
          </span>
        </div>

        {/* Expand / Zoom Button */}
        <button
          id="zoom-btn"
          aria-label="Expand image"
          onClick={() => setIsZoomed(true)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/85 backdrop-blur-md flex items-center justify-center text-on-surface shadow-sm active:scale-95 transition-transform cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">zoom_in</span>
        </button>

        {/* Carousel Dots & Quick Wishlist */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-margin-mobile">
          <div className="flex items-center gap-1.5 bg-surface/80 backdrop-blur-md px-2.5 py-1.5 rounded-full shadow-sm">
            {gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx ? 'w-5 bg-primary' : 'w-2 bg-outline-variant'
                }`}
              />
            ))}
          </div>

          <button
            id="wishlist-btn"
            aria-label="Save to Wishlist"
            onClick={onToggleWishlist}
            className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center text-primary shadow-sm active:scale-90 transition-transform cursor-pointer"
          >
            <span
              className={`material-symbols-outlined text-[22px] transition-colors ${
                isWishlisted ? 'text-secondary' : 'text-primary'
              }`}
              style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>
        </div>
      </section>

      {/* Core Product Header Block */}
      <section className="px-margin-mobile pt-space-lg flex flex-col gap-space-xs">
        {/* Brand Line & Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-secondary">
            <span className="material-symbols-outlined text-[16px]">spa</span>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-semibold">
              YENA Atelier Skincare
            </span>
          </div>
          <div className="flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded-full">
            <span
              className="material-symbols-outlined text-[15px] text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-label-md text-label-md font-bold text-on-surface">4.8</span>
            <span className="text-on-surface-variant font-body-sm text-body-sm">(2,890)</span>
          </div>
        </div>

        {/* Product Title & Subtitle */}
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-headline-sm mt-1">
          {product.name}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {product.subtitle || product.description}
        </p>

        {/* Pricing Row */}
        <div className="mt-2 flex flex-col gap-1">
          <div className="flex items-baseline gap-2.5">
            <span className="font-headline-md text-headline-md font-bold text-primary">
              ₹{totalPrice}
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant line-through">
              ₹{totalOriginalPrice}
            </span>
            <span className="bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps px-2 py-0.5 rounded-full font-semibold">
              Save 22%
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            MRP inclusive of all taxes. Free shipping on this order.
          </p>
        </div>

        {/* Trust Badges Micro-Row */}
        <div className="mt-3 flex items-center justify-between py-2.5 px-3 rounded-lg bg-surface-container-low text-on-surface">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-secondary">credit_card</span>
            <span className="font-label-sm text-label-sm">EMI from ₹233/mo</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-outline-variant" />
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-secondary">local_shipping</span>
            <span className="font-label-sm text-label-sm">COD Available</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-outline-variant" />
          <button
            onClick={() => showToast('Dermatologist consultation available Mon-Sat 9AM-6PM IST')}
            className="font-label-sm text-label-sm text-secondary underline underline-offset-2 cursor-pointer"
          >
            Ask a Question
          </button>
        </div>
      </section>

      {/* Size Selection & Quantity Stepper */}
      <section className="px-margin-mobile mt-space-lg flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
            Select Volume
          </span>
          <button
            onClick={() => showToast('30ml is optimal for standard 4-5 week cycle. 50ml offers best value.')}
            className="font-label-sm text-label-sm text-secondary font-medium hover:underline cursor-pointer"
          >
            Which size is right for you?
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3" id="size-options">
          {/* 30ml Standard */}
          <button
            type="button"
            onClick={() => {
              setSelectedSize('30ml');
              showToast('Selected 30ml Standard variant');
            }}
            className={`flex flex-col p-3 rounded-xl transition-all text-left shadow-sm cursor-pointer ${
              selectedSize === '30ml'
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container text-on-surface'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-label-md text-label-md font-semibold">30ml Standard</span>
              <span
                className={`material-symbols-outlined text-[18px] ${
                  selectedSize === '30ml' ? 'block text-on-primary' : 'hidden'
                }`}
              >
                check_circle
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm mt-1">₹699</span>
            <span className="font-body-sm text-body-sm opacity-80">Daily ritual • 4-5 wks</span>
          </button>

          {/* 50ml Value Pack */}
          <button
            type="button"
            onClick={() => {
              setSelectedSize('50ml');
              showToast('Selected 50ml Value Pack (Save ₹400)');
            }}
            className={`flex flex-col p-3 rounded-xl transition-all text-left shadow-sm cursor-pointer ${
              selectedSize === '50ml'
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container text-on-surface'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-label-md text-label-md font-semibold">50ml Value Pack</span>
              <span
                className={`material-symbols-outlined text-[18px] ${
                  selectedSize === '50ml' ? 'block text-on-primary' : 'hidden'
                }`}
              >
                check_circle
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm mt-1">₹999</span>
            <span
              className={`font-label-sm text-label-sm font-semibold ${
                selectedSize === '50ml' ? 'text-secondary-fixed' : 'text-secondary'
              }`}
            >
              Save ₹400 extra
            </span>
          </button>
        </div>

        {/* Quantity Selector Pill */}
        <div className="flex items-center justify-between mt-2 p-3 bg-surface-container rounded-xl">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface font-semibold">Quantity</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Stocked & ready to dispatch
            </span>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-lowest px-3 py-1.5 rounded-full shadow-sm">
            <button
              aria-label="Decrease quantity"
              className="w-7 h-7 flex items-center justify-center rounded-full text-primary hover:bg-surface-container transition-colors active:scale-90 cursor-pointer"
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            >
              <span className="material-symbols-outlined text-[18px]">remove</span>
            </button>
            <span className="font-label-md text-label-md font-bold text-on-surface min-w-[20px] text-center">
              {quantity}
            </span>
            <button
              aria-label="Increase quantity"
              className="w-7 h-7 flex items-center justify-center rounded-full text-primary hover:bg-surface-container transition-colors active:scale-90 cursor-pointer"
              onClick={() => setQuantity(prev => prev + 1)}
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
          </div>
        </div>
      </section>

      {/* Validated Clinical Efficacy */}
      <section className="px-margin-mobile mt-space-lg">
        <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider font-semibold">
              Validated Clinical Efficacy
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col items-center">
              <span className="font-headline-md text-headline-md text-primary font-headline-sm">
                94%
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                Observed instant glow
              </span>
            </div>
            <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col items-center">
              <span className="font-headline-md text-headline-md text-primary font-headline-sm">
                89%
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                Reduced pigmentation
              </span>
            </div>
            <div className="bg-surface-container-lowest p-2.5 rounded-lg flex flex-col items-center">
              <span className="font-headline-md text-headline-md text-primary font-headline-sm">
                96%
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                Reinforced barrier
              </span>
            </div>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center opacity-80">
            *Independent 8-week clinical perception study with 140 participants.
          </p>
        </div>
      </section>

      {/* Key Highlights Icon Grid */}
      <section className="px-margin-mobile mt-space-lg">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-surface-container p-3 rounded-xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">science</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                15% Ethyl Ascorbic
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                Ultra-stable vitamin C
              </span>
            </div>
          </div>

          <div className="bg-surface-container p-3 rounded-xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">shield_with_heart</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                1% Ferulic Acid
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                Antioxidant shield
              </span>
            </div>
          </div>

          <div className="bg-surface-container p-3 rounded-xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">water_drop</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                Hyaluronic Complex
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                Multi-depth hydration
              </span>
            </div>
          </div>

          <div className="bg-surface-container p-3 rounded-xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">cruelty_free</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                Clean & Kind
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                Fragrance-free & vegan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Routine Pairing Upsell Bundle */}
      <section className="px-margin-mobile mt-space-xl">
        <div className="p-4 rounded-xl bg-surface-container-high flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps uppercase text-secondary font-semibold">
                {ROUTINE_BUNDLE.tag}
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                {ROUTINE_BUNDLE.title}
              </h2>
            </div>
            <span className="bg-secondary text-on-secondary font-label-sm text-label-sm px-2.5 py-1 rounded-full font-bold">
              {ROUTINE_BUNDLE.badge}
            </span>
          </div>

          {/* Bundle Visual Strip */}
          <div className="flex items-center gap-2 py-1">
            {ROUTINE_BUNDLE.steps.map((st, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 bg-surface-container-lowest p-2 rounded-lg flex flex-col items-center">
                  <img
                    className="w-14 h-14 object-cover rounded-md mb-1"
                    alt={st.step}
                    src={st.image}
                  />
                  <span className="font-label-sm text-label-sm text-on-surface font-medium truncate w-full text-center">
                    {st.step}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    ₹{st.price}
                  </span>
                </div>
                {idx < ROUTINE_BUNDLE.steps.length - 1 && (
                  <span className="material-symbols-outlined text-[16px] text-outline">add</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bundle CTA */}
          <button
            type="button"
            onClick={onAddRoutineBundle}
            className="w-full h-11 bg-primary text-on-primary rounded-full font-label-md text-label-md flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-sm cursor-pointer hover:bg-secondary"
          >
            <span>Buy Routine for ₹{ROUTINE_BUNDLE.totalPrice}</span>
            <span className="line-through text-on-primary-container text-body-sm">
              ₹{ROUTINE_BUNDLE.originalTotal}
            </span>
          </button>
        </div>
      </section>

      {/* Expandable Accordion Tabs */}
      <section className="px-margin-mobile mt-space-lg flex flex-col gap-2">
        <h2 className="font-headline-sm text-headline-sm text-on-surface mb-1">
          Formula & Ritual Secrets
        </h2>

        {/* 1: Formula Philosophy */}
        <div className="rounded-xl bg-surface-container overflow-hidden transition-all">
          <button
            className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
            onClick={() => toggleAccordion('acc1')}
          >
            <span className="font-label-md text-label-md font-semibold text-on-surface">
              Formula Philosophy & Results
            </span>
            <span
              className={`material-symbols-outlined text-[20px] text-on-surface transition-transform duration-300 ${
                openAccordions.acc1 ? 'rotate-180' : 'rotate-0'
              }`}
            >
              expand_more
            </span>
          </button>
          {openAccordions.acc1 && (
            <div className="px-4 pb-4 pt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Formulated with advanced 3-O-Ethyl Ascorbic Acid, our formula ensures deep cutaneous penetration without premature oxidation. Ferulic acid doubles antioxidant performance while stabilized hyaluronic spheres replenish depleted lipid barriers.
            </div>
          )}
        </div>

        {/* 2: Key Ingredients */}
        <div className="rounded-xl bg-surface-container overflow-hidden transition-all">
          <button
            className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
            onClick={() => toggleAccordion('acc2')}
          >
            <span className="font-label-md text-label-md font-semibold text-on-surface">
              Key Botanical & Active Ingredients
            </span>
            <span
              className={`material-symbols-outlined text-[20px] text-on-surface transition-transform duration-300 ${
                openAccordions.acc2 ? 'rotate-180' : 'rotate-0'
              }`}
            >
              expand_more
            </span>
          </button>
          {openAccordions.acc2 && (
            <div className="px-4 pb-4 pt-1 flex flex-col gap-3 font-body-md text-body-md text-on-surface-variant">
              <div>
                <strong className="text-on-surface">Kakadu Plum Extract:</strong> World's richest biological source of vitamin C, revitalizes cellular vitality.
              </div>
              <div>
                <strong className="text-on-surface">Niacinamide (Vitamin B3 2%):</strong> Minimizes dilated pore architecture and smooths texture irregularities.
              </div>
              <div>
                <strong className="text-on-surface">Hydrolyzed Sodium Hyaluronate:</strong> Low-molecular hydration agent securing trans-epidermal moisture lock.
              </div>
            </div>
          )}
        </div>

        {/* 3: How to Use */}
        <div className="rounded-xl bg-surface-container overflow-hidden transition-all">
          <button
            className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
            onClick={() => toggleAccordion('acc3')}
          >
            <span className="font-label-md text-label-md font-semibold text-on-surface">
              How to Use: The Morning Ritual
            </span>
            <span
              className={`material-symbols-outlined text-[20px] text-on-surface transition-transform duration-300 ${
                openAccordions.acc3 ? 'rotate-180' : 'rotate-0'
              }`}
            >
              expand_more
            </span>
          </button>
          {openAccordions.acc3 && (
            <div className="px-4 pb-4 pt-1 flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
              <div className="flex items-start gap-3">
                <span className="font-label-caps text-label-caps text-secondary font-bold pt-0.5">01</span>
                <span>Dispense 3–4 drops onto freshly cleansed fingertips or palm.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-label-caps text-label-caps text-secondary font-bold pt-0.5">02</span>
                <span>Gently press into face, neck, and décolletage using upward gliding motions.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-label-caps text-label-caps text-secondary font-bold pt-0.5">03</span>
                <span>Follow immediately with your daily SPF 50 for synergistic photo-protection.</span>
              </div>
            </div>
          )}
        </div>

        {/* 4: Safety */}
        <div className="rounded-xl bg-surface-container overflow-hidden transition-all">
          <button
            className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
            onClick={() => toggleAccordion('acc4')}
          >
            <span className="font-label-md text-label-md font-semibold text-on-surface">
              Dermatological Testing & Safety
            </span>
            <span
              className={`material-symbols-outlined text-[20px] text-on-surface transition-transform duration-300 ${
                openAccordions.acc4 ? 'rotate-180' : 'rotate-0'
              }`}
            >
              expand_more
            </span>
          </button>
          {openAccordions.acc4 && (
            <div className="px-4 pb-4 pt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Hypoallergenic, non-comedogenic, and rigorously patch-tested under strict board-certified dermatological oversight on reactive and sensitive skin profiles. Zero added synthetic fragrances, parabens, phthalates, or microplastics.
            </div>
          )}
        </div>

        {/* 5: Shipping & Returns */}
        <div className="rounded-xl bg-surface-container overflow-hidden transition-all">
          <button
            className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
            onClick={() => toggleAccordion('acc5')}
          >
            <span className="font-label-md text-label-md font-semibold text-on-surface">
              Shipping & 7-Day Hassle-Free Returns
            </span>
            <span
              className={`material-symbols-outlined text-[20px] text-on-surface transition-transform duration-300 ${
                openAccordions.acc5 ? 'rotate-180' : 'rotate-0'
              }`}
            >
              expand_more
            </span>
          </button>
          {openAccordions.acc5 && (
            <div className="px-4 pb-4 pt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Orders placed before 2 PM IST ship the same business day in temperature-regulated insulated eco-packaging. We provide a 7-day love-it-or-return guarantee with instant refund processing.
            </div>
          )}
        </div>
      </section>

      {/* Verified Customer Praise Section */}
      <section className="px-margin-mobile mt-space-xl flex flex-col gap-4" id="reviews">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Verified Customer Praise
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              2,890 verified patron evaluations
            </p>
          </div>
          <button
            onClick={() => showToast('Thank you! Review dialog submitted.')}
            className="bg-surface-container px-3 py-1.5 rounded-full font-label-sm text-label-sm font-semibold text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            Write Review
          </button>
        </div>

        {/* Rating Breakdown Bar */}
        <div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-5">
          <div className="flex flex-col items-center justify-center pr-2">
            <span className="font-display-hero-mobile text-display-hero-mobile font-headline-sm font-bold text-primary leading-none">
              4.8
            </span>
            <div className="flex text-secondary mt-1">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star_half
              </span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              98% Recommend
            </span>
          </div>

          <div className="flex flex-col flex-grow gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-label-sm text-on-surface w-3">5</span>
              <div className="flex-grow bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-[82%]" />
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant w-7 text-right">
                82%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-label-sm text-on-surface w-3">4</span>
              <div className="flex-grow bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-[12%]" />
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant w-7 text-right">
                12%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-label-sm text-on-surface w-3">3</span>
              <div className="flex-grow bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-[4%]" />
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant w-7 text-right">
                4%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-label-sm text-on-surface w-3">2</span>
              <div className="flex-grow bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-[1%]" />
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant w-7 text-right">
                1%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-label-sm text-on-surface w-3">1</span>
              <div className="flex-grow bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-[1%]" />
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant w-7 text-right">
                1%
              </span>
            </div>
          </div>
        </div>

        {/* Customer Photos Strip */}
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
            Real Skin Transformations
          </span>
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {TRANSFORMATION_PHOTOS.map((img, idx) => (
              <div
                key={idx}
                className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => showToast(`Verified photo ${idx + 1} from patron evaluations`)}
              >
                <img
                  className="w-full h-full object-cover"
                  alt={`Transformation ${idx + 1}`}
                  src={img}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-1 no-scrollbar">
          {[
            { id: 'recent', label: 'Most Recent' },
            { id: 'photos', label: 'With Photos (412)' },
            { id: 'verified', label: 'Verified Buyers' },
            { id: 'stars', label: '5 Stars (2,370)' }
          ].map(chip => (
            <button
              key={chip.id}
              onClick={() => setActiveReviewFilter(chip.id)}
              className={`px-3.5 py-1.5 rounded-full font-label-sm text-label-sm flex-shrink-0 cursor-pointer ${
                activeReviewFilter === chip.id
                  ? 'bg-primary text-on-primary font-semibold'
                  : 'bg-surface-container text-on-surface font-medium hover:bg-surface-container-high'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Review Cards Feed */}
        <div className="flex flex-col gap-3">
          {REVIEWS.slice(0, 2).map(rev => (
            <div key={rev.id} className="bg-surface-container p-4 rounded-xl flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    {rev.name}
                  </span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[13px]">verified</span> Verified Buyer
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{rev.time}</span>
              </div>
              <div className="flex text-secondary">
                {[...Array(rev.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                "{rev.text}"
              </p>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Purchased: {rev.purchased}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Bottom Purchase Bar */}
      <aside className="fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-xl pb-safe shadow-[0_-8px_24px_rgba(45,38,34,0.06)] border-t border-surface-variant/30">
        <div className="max-w-md mx-auto px-margin-mobile py-2.5 flex items-center gap-3">
          <div className="flex flex-col min-w-[70px]">
            <span className="font-headline-sm text-headline-sm text-primary leading-tight font-bold">
              ₹{totalPrice}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {selectedSize}
            </span>
          </div>

          <button
            id="add-to-cart-btn"
            onClick={handleAddToCart}
            className="flex-1 h-12 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform hover:bg-surface-container-highest cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            <span>Add to Bag</span>
          </button>

          <button
            id="buy-now-btn"
            onClick={handleBuyNow}
            className="flex-1 h-12 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-md hover:bg-secondary cursor-pointer"
          >
            <span>Buy Now</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </aside>

      {/* Fullscreen Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center cursor-pointer"
            onClick={() => setIsZoomed(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <img
            src={gallery[currentSlide]}
            alt={product.name}
            className="max-h-[80vh] max-w-full object-contain rounded-xl"
          />
          <span className="text-white/70 text-xs font-label-sm mt-3">
            Tap anywhere to close
          </span>
        </div>
      )}
    </div>
  );
};
