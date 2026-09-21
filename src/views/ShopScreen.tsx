import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface ShopScreenProps {
  initialCategory?: string;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onOpenFilter: () => void;
  selectedSkinType: string;
  selectedConcern: string;
  maxPrice: number;
}

export const ShopScreen: React.FC<ShopScreenProps> = ({
  initialCategory = 'all',
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
  onQuickView,
  onOpenFilter,
  selectedSkinType,
  selectedConcern,
  maxPrice
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<'popularity' | 'price-low' | 'price-high' | 'rating'>('popularity');

  const categories = [
    { id: 'all', label: 'All Rituals' },
    { id: 'serums', label: 'Serums' },
    { id: 'cleansers', label: 'Cleansers' },
    { id: 'moisturizers', label: 'Moisturizers' },
    { id: 'sunscreens', label: 'Sunscreen' },
    { id: 'lip-body', label: 'Body & Lips' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(prod => {
      // Category filter
      if (selectedCategory !== 'all') {
        const concernKeys = ['acne', 'dryness', 'dullness', 'pigmentation', 'sensitive'];
        if (concernKeys.includes(selectedCategory)) {
          const matchConcern =
            prod.concerns?.includes(selectedCategory) || prod.concern === selectedCategory;
          if (!matchConcern) return false;
        } else if (prod.category !== selectedCategory) {
          return false;
        }
      }

      // Skin type filter
      if (selectedSkinType !== 'All') {
        const matchSkin =
          prod.skinType?.includes(selectedSkinType) || prod.skinType?.includes('All');
        if (!matchSkin) return false;
      }

      // Concern filter
      if (selectedConcern !== 'all') {
        const matchConcern =
          prod.concerns?.includes(selectedConcern) || prod.concern === selectedConcern;
        if (!matchConcern) return false;
      }

      // Price filter
      if (prod.price > maxPrice) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = prod.name.toLowerCase().includes(q);
        const matchDesc = (prod.description || '').toLowerCase().includes(q);
        const matchCat = (prod.category || '').toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchCat) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // popularity default order
    });
  }, [selectedCategory, selectedSkinType, selectedConcern, maxPrice, searchQuery, sortBy]);

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Top Search & Filter Bar */}
      <section className="px-margin-mobile pt-2 pb-3 bg-surface sticky top-16 z-30 border-b border-surface-variant/30 flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline">
              search
            </span>
            <input
              type="text"
              placeholder="Search serums, cleansers, actives..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-8 rounded-full bg-surface-container text-on-surface font-body-md text-xs placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary/40 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>

          <button
            id="filter-trigger-btn"
            onClick={onOpenFilter}
            className="h-11 px-3.5 rounded-full bg-surface-container flex items-center gap-1.5 text-on-surface font-label-md text-xs font-semibold hover:bg-surface-container-high transition-colors active:scale-95 shadow-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">tune</span>
            <span>Filter</span>
            {(selectedSkinType !== 'All' || selectedConcern !== 'all' || maxPrice < 1200) && (
              <span className="w-2 h-2 rounded-full bg-secondary" />
            )}
          </button>
        </div>

        {/* Category Pills Scroller */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 px-3.5 py-1 rounded-full font-label-md text-xs transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-primary text-on-primary font-semibold shadow-xs'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Sub-header with Count & Sort */}
      <div className="px-margin-mobile py-3 flex items-center justify-between">
        <span className="font-label-sm text-xs text-outline">
          Showing <strong className="text-on-surface font-semibold">{filteredProducts.length}</strong> botanical formulations
        </span>

        <div className="flex items-center gap-1.5">
          <span className="font-label-sm text-[11px] text-outline">Sort:</span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as any)}
            className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2 py-1 rounded-lg border-0 focus:ring-0 cursor-pointer"
          >
            <option value="popularity">Popularity</option>
            <option value="rating">Top Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="px-margin-mobile py-16 text-center flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-outline">
            <span className="material-symbols-outlined text-[28px]">search_off</span>
          </div>
          <h3 className="font-headline-sm text-base text-primary font-semibold">
            No formulations matched your search
          </h3>
          <p className="font-body-md text-xs text-on-surface-variant max-w-[260px]">
            Try adjusting your filters or search keywords to discover matching rituals.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-5 py-2 rounded-full bg-primary text-on-primary font-label-md text-xs font-semibold mt-1"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="px-margin-mobile grid grid-cols-2 gap-3 pb-8">
          {filteredProducts.map(prod => {
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

                  <button
                    aria-label="Quick Preview"
                    className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-surface/85 backdrop-blur-md text-on-surface font-label-sm text-[10px] flex items-center gap-1 shadow-sm opacity-90 hover:opacity-100 transition-opacity"
                    onClick={e => {
                      e.stopPropagation();
                      onQuickView(prod);
                    }}
                  >
                    <span className="material-symbols-outlined text-[12px]">visibility</span>
                    <span>Quick</span>
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
      )}
    </div>
  );
};
