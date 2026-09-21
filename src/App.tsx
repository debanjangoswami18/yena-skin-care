import { useState, useCallback } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { NavDrawer } from './components/NavDrawer';
import { FilterDrawer } from './components/FilterDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { Toast } from './components/Toast';

import { HomeScreen } from './views/HomeScreen';
import { ProductDetails } from './views/ProductDetails';
import { ShopScreen } from './views/ShopScreen';
import { CartScreen } from './views/CartScreen';
import { WishlistView } from './views/WishlistView';
import { OffersView } from './views/OffersView';
import { ProfileView } from './views/ProfileView';

export default function App() {
  // Navigation State
  const [activeView, setActiveView] = useState<string>('home');
  const [viewHistory, setViewHistory] = useState<string[]>(['home']);
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[1]); // Default to 15% Vitamin C Glow Serum (Screen 1)
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Interactive Drawers and Modals
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filter State
  const [selectedSkinType, setSelectedSkinType] = useState<string>('All');
  const [selectedConcern, setSelectedConcern] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(1200);

  // Cart and Wishlist
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: PRODUCTS[0].id,
      productId: PRODUCTS[0].id,
      product: PRODUCTS[0], // Hydrating Cleanser
      quantity: 1,
      selectedVolume: '150ml',
      price: PRODUCTS[0].price
    }
  ]);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set(['yena-vit-c-serum', 'yena-spf50-dewy']));

  // Toast System
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(current => (current === msg ? null : current));
    }, 2800);
  }, []);

  // Navigation handlers
  const handleNavigate = (view: string, filter?: string) => {
    if (filter) {
      setCategoryFilter(filter);
    }
    setViewHistory(prev => [...prev, view]);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (viewHistory.length > 1) {
      const newHistory = [...viewHistory];
      newHistory.pop();
      const prevView = newHistory[newHistory.length - 1] || 'home';
      setViewHistory(newHistory);
      setActiveView(prevView);
    } else {
      setActiveView('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    handleNavigate('pdp');
  };

  // Cart operations
  const handleAddToCart = (product: Product, volume?: string, price?: number, qty = 1) => {
    const itemPrice = price ?? product.price;
    const itemVolume = volume ?? product.volume ?? 'Standard';

    setCart(prev => {
      const existingIdx = prev.findIndex(
        i => i.product.id === product.id && (i.selectedVolume || '') === itemVolume
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += qty;
        return updated;
      }
      return [
        ...prev,
        {
          id: `${product.id}-${itemVolume}`,
          productId: product.id,
          product,
          quantity: qty,
          selectedVolume: itemVolume,
          price: itemPrice
        }
      ];
    });

    showToast(`Added ${product.name} to your Ritual Bag`);
  };

  const handleBuyNow = (product: Product, volume?: string, price?: number, qty = 1) => {
    handleAddToCart(product, volume, price, qty);
    handleNavigate('cart');
  };

  const handleUpdateCartQty = (productId: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from Ritual Bag');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Routine bundle 3-step action
  const handleAddRoutineBundle = () => {
    const cleanse = PRODUCTS[0];
    const serum = PRODUCTS[1];
    const spf = PRODUCTS[3];

    setCart(prev => [
      ...prev,
      {
        id: `${cleanse.id}-bundle`,
        productId: cleanse.id,
        product: cleanse,
        quantity: 1,
        selectedVolume: '150ml',
        price: 399
      },
      {
        id: `${serum.id}-bundle`,
        productId: serum.id,
        product: serum,
        quantity: 1,
        selectedVolume: '30ml',
        price: 699
      },
      {
        id: `${spf.id}-bundle`,
        productId: spf.id,
        product: spf,
        quantity: 1,
        selectedVolume: '50g',
        price: 549
      }
    ]);
    showToast(`Added 3-Step Synergy Routine to your Bag (Saved ₹248)`);
    handleNavigate('cart');
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast(`Removed ${product.name} from Wishlist`);
      } else {
        next.add(product.id);
        showToast(`Saved ${product.name} to Wishlist`);
      }
      return next;
    });
  };

  // Share handler
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: selectedProduct.name,
          text: `Explore ${selectedProduct.name} at YENA Skincare Atelier`,
          url: window.location.href
        })
        .catch(() => {});
    } else {
      navigator.clipboard?.writeText?.(window.location.href);
      showToast('Product link copied to clipboard!');
    }
  };

  // Filter Reset
  const handleResetFilters = () => {
    setSelectedSkinType('All');
    setSelectedConcern('all');
    setMaxPrice(1200);
    showToast('Filters reset to default');
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col items-center selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Toast Notification */}
      <Toast message={toastMessage} />

      {/* Main Container Frame */}
      <div className="w-full max-w-md min-h-screen bg-surface flex flex-col shadow-2xl relative border-x border-surface-variant/20">
        {/* Top Header */}
        <Header
          mode={activeView === 'pdp' ? 'pdp' : 'default'}
          title={selectedProduct.name}
          cartCount={totalCartCount}
          wishlistCount={wishlist.size}
          onOpenMenu={() => setIsNavDrawerOpen(true)}
          onNavigate={handleNavigate}
          onBack={handleBack}
          onShare={handleShare}
        />

        {/* View Switcher with Top Padding for Fixed Header */}
        <main className="flex-1 w-full pt-16 flex flex-col">
          {activeView === 'home' && (
            <HomeScreen
              wishlistIds={wishlist}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={p => handleAddToCart(p)}
              onSelectProduct={handleSelectProduct}
              onNavigate={handleNavigate}
              showToast={showToast}
            />
          )}

          {activeView === 'pdp' && (
            <ProductDetails
              product={selectedProduct}
              isWishlisted={wishlist.has(selectedProduct.id)}
              onToggleWishlist={() => handleToggleWishlist(selectedProduct)}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              onAddRoutineBundle={handleAddRoutineBundle}
              showToast={showToast}
            />
          )}

          {(activeView === 'shop-all' || activeView === 'categories' || activeView === 'best-sellers') && (
            <ShopScreen
              initialCategory={categoryFilter}
              wishlistIds={wishlist}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={p => handleAddToCart(p)}
              onSelectProduct={handleSelectProduct}
              onQuickView={p => setQuickViewProduct(p)}
              onOpenFilter={() => setIsFilterDrawerOpen(true)}
              selectedSkinType={selectedSkinType}
              selectedConcern={selectedConcern}
              maxPrice={maxPrice}
            />
          )}

          {activeView === 'cart' && (
            <CartScreen
              items={cart}
              onUpdateQty={handleUpdateCartQty}
              onRemoveItem={handleRemoveCartItem}
              onSelectProduct={handleSelectProduct}
              onNavigate={handleNavigate}
              onClearCart={handleClearCart}
              showToast={showToast}
            />
          )}

          {activeView === 'wishlist' && (
            <WishlistView
              wishlistIds={wishlist}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={p => handleAddToCart(p)}
              onSelectProduct={handleSelectProduct}
              onNavigate={handleNavigate}
            />
          )}

          {activeView === 'offers-and-deals' && (
            <OffersView
              onAddToCart={p => handleAddToCart(p)}
              onSelectProduct={handleSelectProduct}
              onAddRoutineBundle={handleAddRoutineBundle}
              showToast={showToast}
            />
          )}

          {activeView === 'profile' && (
            <ProfileView onNavigate={handleNavigate} showToast={showToast} />
          )}

          {/* Simple Informational Views */}
          {activeView === 'about-us' && (
            <div className="px-margin-mobile py-6 flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-primary">
                The YENA Atelier Story
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Born out of the need for uncompromised skin barrier health, YENA merges time-honored Ayurvedic botanicals with clean, high-efficacy clinical actives.
              </p>
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2">
                <span className="font-headline-sm text-sm font-semibold text-primary">Our 4 Pillars</span>
                <span className="font-body-sm text-xs text-on-surface-variant">• Physiological pH 5.5 in every formulation</span>
                <span className="font-body-sm text-xs text-on-surface-variant">• 100% PETA certified vegan & cruelty-free</span>
                <span className="font-body-sm text-xs text-on-surface-variant">• Zero artificial colorants or pore-clogging silicones</span>
                <span className="font-body-sm text-xs text-on-surface-variant">• Ethical wild-crafted botanical sourcing</span>
              </div>
              <button
                onClick={() => handleNavigate('shop-all')}
                className="mt-2 py-3 rounded-full bg-primary text-on-primary font-label-md text-xs font-semibold"
              >
                Explore Formulations
              </button>
            </div>
          )}

          {activeView === 'contact' && (
            <div className="px-margin-mobile py-6 flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-primary">
                Apothecary Concierge
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Have questions about formulating your routine or tracking your delivery? Our team is available 6 days a week.
              </p>
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">mail</span>
                  <span className="font-body-md text-xs text-primary">care@yenaskincare.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">call</span>
                  <span className="font-body-md text-xs text-primary">+91 80 4912 8820</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
                  <span className="font-body-md text-xs text-on-surface-variant">Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>
              <button
                onClick={() => handleNavigate('home')}
                className="mt-2 py-3 rounded-full bg-primary text-on-primary font-label-md text-xs font-semibold"
              >
                Back to Home
              </button>
            </div>
          )}

          {activeView === 'faq' && (
            <div className="px-margin-mobile py-6 flex flex-col gap-4">
              <h2 className="font-headline-md text-headline-md text-primary">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-2.5">
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <h4 className="font-headline-sm text-xs font-semibold text-primary">Can I layer Vitamin C with SPF?</h4>
                  <p className="font-body-sm text-[11px] text-on-surface-variant">
                    Yes! Vitamin C and SPF work synergistically. Vitamin C neutralizes free radicals while sunscreen shields against UV rays.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <h4 className="font-headline-sm text-xs font-semibold text-primary">Are your formulations suitable for acne-prone skin?</h4>
                  <p className="font-body-sm text-[11px] text-on-surface-variant">
                    All our products are non-comedogenic and free of heavy occlusives that trigger breakouts.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <h4 className="font-headline-sm text-xs font-semibold text-primary">What is the return policy?</h4>
                  <p className="font-body-sm text-[11px] text-on-surface-variant">
                    We offer a 7-day hassle-free return guarantee with instant refunds on unopened or gently tested products.
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Bottom Navigation (Shown on non-PDP views or as fixed bar) */}
        {activeView !== 'pdp' && (
          <BottomNav
            currentTab={activeView}
            cartCount={totalCartCount}
            wishlistCount={wishlist.size}
            onSelectTab={handleNavigate}
          />
        )}

        {/* Side Navigation Drawer */}
        <NavDrawer
          isOpen={isNavDrawerOpen}
          activePath={activeView}
          onClose={() => setIsNavDrawerOpen(false)}
          onNavigate={handleNavigate}
        />

        {/* Filter Drawer */}
        <FilterDrawer
          isOpen={isFilterDrawerOpen}
          selectedSkinType={selectedSkinType}
          selectedConcern={selectedConcern}
          maxPrice={maxPrice}
          totalFilteredCount={PRODUCTS.length}
          onSelectSkinType={setSelectedSkinType}
          onSelectConcern={setSelectedConcern}
          onSetMaxPrice={setMaxPrice}
          onReset={handleResetFilters}
          onClose={() => setIsFilterDrawerOpen(false)}
        />

        {/* Quick View Modal */}
        <QuickViewModal
          product={quickViewProduct}
          isOpen={quickViewProduct !== null}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={p => handleAddToCart(p)}
          onViewDetails={handleSelectProduct}
        />
      </div>
    </div>
  );
}
