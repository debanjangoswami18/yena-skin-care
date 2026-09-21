import React, { useState } from 'react';
import {
  PRODUCTS,
  CATEGORIES_SCROLLER,
  SKIN_CONCERNS_CARDS,
  REVIEWS,
  SOCIAL_GALLERY
} from '../data/products';
import { Product } from '../types';

interface HomeScreenProps {
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onNavigate: (view: string, filter?: string) => void;
  showToast: (msg: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
  onNavigate,
  showToast
}) => {
  const [activeConcern, setActiveConcern] = useState<string>('all');
  const [emailInput, setEmailInput] = useState<string>('');

  const concernChips = [
    { id: 'all', label: 'All Concerns' },
    { id: 'acne', label: 'Acne & Breakouts' },
    { id: 'dryness', label: 'Dry Skin' },
    { id: 'dullness', label: 'Dull Skin' },
    { id: 'pigmentation', label: 'Uneven Tone' },
    { id: 'sensitive', label: 'Sensitive Barrier' }
  ];

  const filteredConcernCards =
    activeConcern === 'all'
      ? SKIN_CONCERNS_CARDS
      : SKIN_CONCERNS_CARDS.filter(c => c.id === activeConcern);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    showToast(`Welcome to YENA! ₹100 Off Code sent to ${emailInput}`);
    setEmailInput('');
  };

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Editorial Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface-container-low pb-space-lg">
        <div className="relative w-full h-[460px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Aesthetic luxury skincare bottles on natural stone in warm morning diffused sunlight"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSgtMNIVSoWgafrNwhv3BDv6Mc_QHaC_0Hdnst8uewIwqT05N-dWuOx7fSsp7P6HxDJ5NEeTTwsRpt56llW8KnodQC_aLwO3Mn73x7-wiymG9SE1hX3RTIPGqff5mThYMyEuK8U2aIg7-vxre39YdPD9HFFiYSnqRLIuotZa5FYM4GLK6uQppdCtZ0sUZdheKHNlIztvwvzHskTB7F6x2KG1VoO2mSEJWm9sueKj_MboYJZh61iZv3LA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

          {/* Floating Badge */}
          <div className="absolute top-4 left-margin-mobile">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md text-on-surface-variant font-label-caps text-[10px] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Clean • Dermatologist Backed • 100% Vegan
            </span>
          </div>

          {/* Hero Typography & CTAs */}
          <div className="absolute bottom-4 inset-x-margin-mobile flex flex-col gap-2">
            <h1 className="font-display-hero-mobile text-display-hero-mobile text-primary leading-tight">
              Healthy Skin.
              <br />
              <span className="italic font-normal">Naturally You.</span>
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[290px] leading-relaxed">
              Simple, clinically balanced botanicals designed for your everyday mindful glow.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                id="hero-shop-btn"
                className="flex-1 h-12 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform cursor-pointer"
                onClick={() => onNavigate('shop-all')}
              >
                <span>Shop Now</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                id="hero-explore-btn"
                className="flex-1 h-12 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md flex items-center justify-center shadow-sm active:scale-95 transition-transform hover:bg-surface-container cursor-pointer"
                onClick={() => onNavigate('categories')}
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>

        {/* Quick Trust Badges Strip */}
        <div className="px-margin-mobile pt-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-lowest shadow-sm">
              <div className="w-8 h-8 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-[18px]">local_shipping</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-[12px] text-primary font-semibold leading-tight">
                  Free Shipping
                </span>
                <span className="font-body-sm text-[10px] text-outline truncate">
                  On orders over ₹499
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-lowest shadow-sm">
              <div className="w-8 h-8 rounded-full bg-tertiary-fixed/60 flex items-center justify-center text-tertiary-container">
                <span className="material-symbols-outlined text-[18px]">cruelty_free</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-[12px] text-primary font-semibold leading-tight">
                  Cruelty Free
                </span>
                <span className="font-body-sm text-[10px] text-outline truncate">
                  100% PETA Certified
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-lowest shadow-sm">
              <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-[12px] text-primary font-semibold leading-tight">
                  Derma Tested
                </span>
                <span className="font-body-sm text-[10px] text-outline truncate">
                  Non-comedogenic care
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-lowest shadow-sm">
              <div className="w-8 h-8 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[18px]">spa</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-[12px] text-primary font-semibold leading-tight">
                  Clean Formulas
                </span>
                <span className="font-body-sm text-[10px] text-outline truncate">
                  Zero toxins or parabens
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Ritual Categories */}
      <section className="py-space-lg w-full">
        <div className="px-margin-mobile flex items-end justify-between mb-3">
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              Apothecary
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-0.5">
              Explore by Ritual
            </h2>
          </div>
          <button
            onClick={() => onNavigate('categories')}
            className="font-label-md text-label-md text-secondary flex items-center gap-0.5 hover:underline cursor-pointer"
          >
            See all <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto px-margin-mobile pb-2 no-scrollbar">
          {CATEGORIES_SCROLLER.map(cat => (
            <button
              key={cat.id}
              onClick={() => onNavigate('shop-all', cat.id)}
              className="flex-shrink-0 w-28 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden bg-surface-container p-1 shadow-sm">
                <img
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 group-active:scale-95 transition-transform duration-300"
                  alt={cat.name}
                  src={cat.image}
                />
              </div>
              <span className="font-label-md text-[12px] text-primary mt-2 font-semibold text-center truncate w-full">
                {cat.name}
              </span>
              <span className="font-body-sm text-[10px] text-outline">Explore</span>
            </button>
          ))}
        </div>
      </section>

      {/* Iconic Formulas (Best Sellers Grid) */}
      <section className="py-space-md w-full bg-surface-container-low">
        <div className="px-margin-mobile flex items-end justify-between mb-4 pt-4">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                Most Loved
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mt-0.5">
              Iconic Formulas
            </h2>
          </div>
          <button
            onClick={() => onNavigate('best-sellers')}
            className="font-label-md text-label-md text-secondary font-medium flex items-center hover:underline cursor-pointer"
          >
            View all <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* 2-Column Grid */}
        <div className="px-margin-mobile grid grid-cols-2 gap-3 pb-6">
          {PRODUCTS.slice(0, 6).map(prod => {
            const isWish = wishlistIds.has(prod.id);
            return (
              <div
                key={prod.id}
                className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm relative group transition-all"
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
                  {prod.discountBadge && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-[9px] font-bold">
                      {prod.discountBadge}
                    </span>
                  )}
                  <button
                    aria-label="Add to wishlist"
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface transition-transform active:scale-90 shadow-sm"
                    onClick={e => {
                      e.stopPropagation();
                      onToggleWishlist(prod);
                    }}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] transition-colors ${
                        isWish ? 'text-secondary' : 'text-on-surface-variant'
                      }`}
                      style={{ fontVariationSettings: isWish ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      favorite
                    </span>
                  </button>
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-surface/90 text-on-surface-variant font-label-sm text-[10px]">
                    {prod.volume}
                  </span>
                </div>

                <div className="p-3 flex flex-col flex-grow justify-between gap-2">
                  <div className="cursor-pointer" onClick={() => onSelectProduct(prod)}>
                    <div className="flex items-center gap-1 text-[11px] text-outline mb-1">
                      <span
                        className="material-symbols-outlined text-[14px] text-secondary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-bold text-primary">{prod.rating}</span>
                      <span className="text-[10px]">
                        ({typeof prod.reviewCount === 'number' ? prod.reviewCount.toLocaleString() : prod.reviewCount})
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-sm text-primary font-semibold line-clamp-1 leading-snug hover:text-secondary transition-colors">
                      {prod.name}
                    </h3>
                    <p className="font-body-sm text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">
                      {prod.subtitle || prod.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-sm text-primary font-bold">
                        ₹{prod.price}
                      </span>
                      {prod.originalPrice > prod.price && (
                        <span className="font-body-sm text-[10px] text-outline line-through">
                          ₹{prod.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      aria-label={`Add ${prod.name} to cart`}
                      className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-90 transition-transform hover:bg-secondary cursor-pointer"
                      onClick={() => onAddToCart(prod)}
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="px-margin-mobile py-space-lg w-full">
        <div className="relative overflow-hidden rounded-2xl bg-primary-container text-on-primary p-6 shadow-xl">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-secondary/30 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-secondary-fixed-dim/20 blur-xl pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary-fixed text-[10px] font-label-caps tracking-wider">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              FESTIVE RITUAL DROP
            </div>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-white leading-tight">
              Your Glow Starts Here.
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container max-w-[280px]">
              Get up to 20% OFF on selected skincare essentials. Formulated for everyday harmony.
            </p>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 bg-surface/10 backdrop-blur-md px-3 py-1.5 rounded-lg">
                <span className="font-body-sm text-[11px] text-on-primary-container">Use Code:</span>
                <span className="font-label-md text-label-md text-secondary-fixed font-mono font-bold tracking-wider">
                  GLOW20
                </span>
              </div>
              <button
                className="px-4 py-2.5 rounded-full bg-secondary text-on-secondary font-label-md text-label-md shadow-md active:scale-95 transition-transform flex items-center gap-1 cursor-pointer"
                onClick={() => onNavigate('offers-and-deals')}
              >
                Shop Offers <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Skin Concern */}
      <section className="py-space-md w-full">
        <div className="px-margin-mobile mb-3">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
            Targeted Care
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-0.5">
            Shop by Skin Concern
          </h2>
        </div>

        <div className="flex gap-2 overflow-x-auto px-margin-mobile pb-3 no-scrollbar">
          {concernChips.map(chip => (
            <button
              key={chip.id}
              onClick={() => setActiveConcern(chip.id)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full font-label-md text-[12px] shadow-sm transition-colors cursor-pointer ${
                activeConcern === chip.id
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <div className="px-margin-mobile grid grid-cols-2 gap-3">
          {filteredConcernCards.map(concern => (
            <div
              key={concern.id}
              onClick={() => onNavigate('shop-all', concern.id)}
              className="relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-container shadow-sm group cursor-pointer"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={concern.title}
                src={concern.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-on-primary">
                <span className="font-label-caps text-[9px] uppercase tracking-wider text-secondary-fixed">
                  {concern.tag}
                </span>
                <h3 className="font-headline-sm text-sm text-white font-semibold leading-tight mt-0.5">
                  {concern.title}
                </h3>
                <p className="font-body-sm text-[10px] text-surface-container-high line-clamp-1 mt-0.5">
                  {concern.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Skin Loves YENA */}
      <section className="px-margin-mobile py-space-lg w-full bg-surface-container-low">
        <div className="text-center max-w-[320px] mx-auto mb-6">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
            Philosophy
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">
            Why Skin Loves YENA
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Formulated at the nexus of clinical rigor and pure botanical harmony.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed/50 text-secondary flex items-center justify-center mb-1">
              <span className="material-symbols-outlined text-[20px]">science</span>
            </div>
            <h3 className="font-headline-sm text-sm text-primary font-semibold">
              Dermatologically Tested
            </h3>
            <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
              Clinically evaluated for hypoallergenic safety on all Indian skin types.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed/60 text-tertiary-container flex items-center justify-center mb-1">
              <span className="material-symbols-outlined text-[20px]">psychiatry</span>
            </div>
            <h3 className="font-headline-sm text-sm text-primary font-semibold">
              Skin-Loving Actives
            </h3>
            <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
              High-grade molecules balanced with calming plant antioxidants.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center mb-1">
              <span className="material-symbols-outlined text-[20px]">eco</span>
            </div>
            <h3 className="font-headline-sm text-sm text-primary font-semibold">
              100% Cruelty Free
            </h3>
            <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
              PETA certified vegan formulas with zero animal testing ever.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed/40 text-on-secondary-container flex items-center justify-center mb-1">
              <span className="material-symbols-outlined text-[20px]">repeat</span>
            </div>
            <h3 className="font-headline-sm text-sm text-primary font-semibold">
              Everyday Barrier Safe
            </h3>
            <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
              pH 5.5 neutral balancing so skin never feels stripped or irritated.
            </p>
          </div>
        </div>
      </section>

      {/* Community Voices */}
      <section className="py-space-lg w-full">
        <div className="px-margin-mobile flex items-end justify-between mb-4">
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
              Community Voices
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-0.5">
              Real Skin. Real Joy.
            </h2>
          </div>
          <div className="flex items-center gap-1 text-secondary">
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-label-md text-label-md font-bold text-primary">4.9/5</span>
          </div>
        </div>

        <div className="flex gap-3.5 overflow-x-auto px-margin-mobile pb-3 no-scrollbar">
          {REVIEWS.slice(2, 5).map(rev => (
            <div
              key={rev.id}
              className="flex-shrink-0 w-72 p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-secondary gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="font-label-caps text-[9px] px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed">
                    Verified Buyer
                  </span>
                </div>
                <p className="font-headline-sm text-sm text-primary italic font-normal leading-snug mb-2">
                  "{rev.text}"
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-2 border-t border-surface-variant/30">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-secondary text-xs">
                  {rev.initials || 'YR'}
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-[12px] text-primary font-semibold">
                    {rev.name}
                  </span>
                  <span className="font-body-sm text-[10px] text-outline">
                    {rev.skinType || 'Verified Patron'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram & Social Feed */}
      <section className="py-space-md w-full">
        <div className="px-margin-mobile flex items-center justify-between mb-3">
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
              Social Feed
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-0.5">
              Follow @YENASkincare
            </h2>
          </div>
          <button
            onClick={() => showToast('Opening @YENASkincare Instagram...')}
            className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-[11px] shadow-sm flex items-center gap-1 active:scale-95 transition-transform cursor-pointer"
          >
            Follow <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </button>
        </div>

        <div className="px-margin-mobile grid grid-cols-4 gap-2">
          {SOCIAL_GALLERY.map((img, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-xl overflow-hidden bg-surface-container shadow-xs cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => showToast('Ritual moment from @YENASkincare community')}
            >
              <img className="w-full h-full object-cover" alt="Social story" src={img} />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-margin-mobile py-space-lg w-full">
        <div className="p-6 rounded-2xl bg-surface-container text-center flex flex-col items-center gap-2 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-secondary-fixed/50 text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">mail</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary">
            Join the YENA Circle
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
            Receive dermatologist tips, early access to festive formulations, and ₹100 off your first ritual.
          </p>
          <form className="w-full mt-3 flex flex-col gap-2" onSubmit={handleNewsletterSubmit}>
            <div className="relative w-full">
              <input
                className="w-full h-12 px-4 rounded-full bg-surface-container-lowest text-on-surface font-body-md text-sm placeholder:text-outline focus:outline-none shadow-sm"
                placeholder="Enter your email address..."
                type="email"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                required
              />
            </div>
            <button
              className="w-full h-12 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-md active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer hover:bg-secondary"
              type="submit"
            >
              <span>Subscribe & Unlock ₹100 Off</span>
              <span className="material-symbols-outlined text-[18px]">east</span>
            </button>
          </form>
          <span className="font-body-sm text-[10px] text-outline mt-1">
            No spam. Only mindful skincare wisdom. Unsubscribe anytime.
          </span>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="w-full bg-surface-container-high px-margin-mobile py-space-lg flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px]">spa</span>
            </div>
            <span className="font-headline-sm text-base text-primary font-bold tracking-wide">
              YENA SKINCARE
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Crafted in harmony with skin physiology and the natural world. Pure actives, barrier-respecting pH, and honest formulations created for your daily mindful ritual.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="flex flex-col gap-2">
            <span className="font-label-caps text-[10px] text-primary uppercase font-bold tracking-wider">
              Quick Rituals
            </span>
            <button
              onClick={() => onNavigate('best-sellers')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left"
            >
              Best Sellers
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left"
            >
              Shop by Concern
            </button>
            <button
              onClick={() => onNavigate('offers-and-deals')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left"
            >
              Festive Offers
            </button>
            <button
              onClick={() => onNavigate('shop-all')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left"
            >
              All Formulas
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-label-caps text-[10px] text-primary uppercase font-bold tracking-wider">
              Customer Care
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left"
            >
              Track Order
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left"
            >
              FAQ & Support
            </button>
            <button
              onClick={() => onNavigate('about-us')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left"
            >
              Our Story & Labs
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-surface-container-lowest flex flex-col gap-2 shadow-sm">
          <span className="font-label-caps text-[9px] text-outline uppercase tracking-wider text-center">
            100% Secure Checkout & Certified Pure
          </span>
          <div className="flex items-center justify-around text-on-surface-variant">
            <div className="flex items-center gap-1 font-label-sm text-[10px]">
              <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
              Encrypted
            </div>
            <div className="flex items-center gap-1 font-label-sm text-[10px]">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                assignment_return
              </span>
              15-Day Return
            </div>
            <div className="flex items-center gap-1 font-label-sm text-[10px]">
              <span className="material-symbols-outlined text-[16px] text-secondary">payments</span>
              COD Available
            </div>
          </div>
        </div>

        <div className="text-center pt-2 pb-4">
          <p className="font-body-sm text-[11px] text-outline">
            © 2024 YENA Skincare Ateliers Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
