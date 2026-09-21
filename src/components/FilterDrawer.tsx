import React from 'react';

interface FilterDrawerProps {
  isOpen: boolean;
  selectedSkinType: string;
  selectedConcern: string;
  maxPrice: number;
  totalFilteredCount: number;
  onSelectSkinType: (type: string) => void;
  onSelectConcern: (concern: string) => void;
  onSetMaxPrice: (price: number) => void;
  onReset: () => void;
  onClose: () => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  selectedSkinType,
  selectedConcern,
  maxPrice,
  totalFilteredCount,
  onSelectSkinType,
  onSelectConcern,
  onSetMaxPrice,
  onReset,
  onClose
}) => {
  const skinTypes = ['All', 'Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'];
  const concerns = [
    { id: 'all', label: 'All Concerns' },
    { id: 'pigmentation', label: 'Pigmentation' },
    { id: 'acne', label: 'Acne & Blemishes' },
    { id: 'dullness', label: 'Dullness' },
    { id: 'dryness', label: 'Hydration' },
    { id: 'sensitive', label: 'Sensitive Barrier' }
  ];

  const activeCount =
    (selectedSkinType !== 'All' ? 1 : 0) +
    (selectedConcern !== 'all' ? 1 : 0) +
    (maxPrice < 1200 ? 1 : 0);

  return (
    <>
      <div
        id="filter-backdrop"
        className={`fixed inset-0 z-50 bg-primary-container/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        id="filter-drawer"
        className={`fixed bottom-0 left-0 right-0 z-50 max-h-[80vh] bg-surface rounded-t-3xl shadow-[0_-16px_36px_-6px_rgba(45,38,34,0.15)] transition-transform duration-300 ease-out flex flex-col overflow-hidden pb-safe ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Drawer Handle & Header */}
        <div className="pt-3 pb-2 px-margin-mobile flex flex-col items-center bg-surface sticky top-0 z-10 border-b border-surface-variant/30">
          <div className="w-10 h-1 rounded-full bg-outline-variant/60 mb-3" />
          <div className="w-full flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <h2 className="font-headline-sm text-base font-semibold text-primary">
                Filter Routine
              </h2>
              {activeCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-[9px] font-bold">
                  {activeCount} Selected
                </span>
              )}
            </div>
            <button
              className="font-label-sm text-xs text-secondary font-medium hover:underline cursor-pointer"
              onClick={onReset}
            >
              Reset All
            </button>
          </div>
        </div>

        {/* Scrollable Filter Content */}
        <div className="overflow-y-auto px-margin-mobile py-4 flex flex-col gap-4 no-scrollbar">
          {/* Skin Type */}
          <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-xs flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-xs font-semibold text-primary">
                Skin Type
              </span>
              <span className="font-body-sm text-[10px] text-outline">Personalized</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skinTypes.map(st => {
                const isSelected = selectedSkinType === st;
                return (
                  <button
                    key={st}
                    onClick={() => onSelectSkinType(st)}
                    className={`px-3 py-1.5 rounded-full font-label-sm text-[11px] font-medium transition-all ${
                      isSelected
                        ? 'bg-secondary text-on-secondary shadow-xs'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {st}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Concern */}
          <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-xs flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-xs font-semibold text-primary">
                Primary Concern
              </span>
              <span className="font-body-sm text-[10px] text-outline">Targeted Actives</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {concerns.map(c => {
                const isSelected = selectedConcern === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => onSelectConcern(c.id)}
                    className={`px-3 py-1.5 rounded-full font-label-sm text-[11px] font-medium transition-all ${
                      isSelected
                        ? 'bg-secondary text-on-secondary shadow-xs'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-xs font-semibold text-primary">
                Price Range
              </span>
              <span className="font-label-md text-xs text-secondary font-bold">
                Up to ₹{maxPrice}
              </span>
            </div>
            <input
              type="range"
              min="249"
              max="1200"
              step="50"
              value={maxPrice}
              onChange={e => onSetMaxPrice(Number(e.target.value))}
              className="w-full h-1.5 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex items-center gap-1.5">
              <button
                className={`px-2.5 py-1 rounded-full font-label-sm text-[10px] ${
                  maxPrice === 499
                    ? 'bg-secondary-fixed text-on-secondary-fixed font-semibold'
                    : 'bg-surface-container text-on-surface'
                }`}
                onClick={() => onSetMaxPrice(499)}
              >
                Under ₹499
              </button>
              <button
                className={`px-2.5 py-1 rounded-full font-label-sm text-[10px] ${
                  maxPrice === 799
                    ? 'bg-secondary-fixed text-on-secondary-fixed font-semibold'
                    : 'bg-surface-container text-on-surface'
                }`}
                onClick={() => onSetMaxPrice(799)}
              >
                ₹499 - ₹799
              </button>
              <button
                className={`px-2.5 py-1 rounded-full font-label-sm text-[10px] ${
                  maxPrice === 1200
                    ? 'bg-secondary-fixed text-on-secondary-fixed font-semibold'
                    : 'bg-surface-container text-on-surface'
                }`}
                onClick={() => onSetMaxPrice(1200)}
              >
                All Prices
              </button>
            </div>
          </div>
        </div>

        {/* Apply Sticky Bottom Bar */}
        <div className="p-margin-mobile bg-surface-container-lowest flex items-center gap-space-sm shadow-[0_-4px_16px_rgba(45,38,34,0.04)] border-t border-surface-variant/30">
          <button
            className="w-full h-12 rounded-full bg-primary text-on-primary font-label-md text-sm font-medium flex items-center justify-center shadow-md active:scale-98 transition-transform"
            onClick={onClose}
          >
            Apply Filters ({totalFilteredCount} Formulations)
          </button>
        </div>
      </aside>
    </>
  );
};
