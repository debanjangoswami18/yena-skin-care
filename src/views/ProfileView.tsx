import React from 'react';
import { USER_AVATAR } from '../data/products';

interface ProfileViewProps {
  onNavigate: (view: string) => void;
  showToast: (msg: string) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onNavigate, showToast }) => {
  return (
    <div className="px-margin-mobile py-4 flex flex-col w-full pb-28 gap-4">
      {/* User Header */}
      <div className="p-4 rounded-2xl bg-surface-container-low flex items-center gap-3.5 shadow-sm">
        <img
          alt="Pooja Mehta"
          className="w-14 h-14 rounded-full object-cover ring-2 ring-secondary/40 shadow-xs"
          src={USER_AVATAR}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="font-headline-sm text-base text-primary font-bold">Pooja Mehta</h2>
            <span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-caps text-[9px] font-bold">
              VIP
            </span>
          </div>
          <span className="font-body-sm text-xs text-outline">pooja.mehta@example.com</span>
          <span className="font-label-sm text-[11px] text-secondary font-medium mt-0.5">
            Ritual Circle • 240 Apothecary Points
          </span>
        </div>
      </div>

      {/* Skin Profile Summary */}
      <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-headline-sm text-sm text-primary font-semibold">
            My Skin Diagnostic
          </span>
          <button
            onClick={() => showToast('Diagnostic questionnaire updated')}
            className="font-label-sm text-xs text-secondary underline"
          >
            Retake Quiz
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-1 text-center">
          <div className="p-2 rounded-xl bg-surface-container-low flex flex-col">
            <span className="font-body-sm text-[10px] text-outline">Skin Type</span>
            <span className="font-label-md text-xs font-semibold text-primary mt-0.5">
              Combination
            </span>
          </div>
          <div className="p-2 rounded-xl bg-surface-container-low flex flex-col">
            <span className="font-body-sm text-[10px] text-outline">Top Concern</span>
            <span className="font-label-md text-xs font-semibold text-primary mt-0.5">
              Dullness
            </span>
          </div>
          <div className="p-2 rounded-xl bg-surface-container-low flex flex-col">
            <span className="font-body-sm text-[10px] text-outline">Sensitivity</span>
            <span className="font-label-md text-xs font-semibold text-primary mt-0.5">
              Mild
            </span>
          </div>
        </div>
      </div>

      {/* Quick Links Menu */}
      <div className="flex flex-col rounded-2xl bg-surface-container-lowest shadow-sm divide-y divide-surface-variant/30 overflow-hidden">
        <button
          onClick={() => showToast('Order #YENA-8291 is arriving in 2 days')}
          className="p-3.5 flex items-center justify-between hover:bg-surface-container-low transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px] text-secondary">
              local_shipping
            </span>
            <span className="font-label-md text-xs font-semibold text-primary">
              Order History & Tracking
            </span>
          </div>
          <span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
        </button>

        <button
          onClick={() => onNavigate('wishlist')}
          className="p-3.5 flex items-center justify-between hover:bg-surface-container-low transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px] text-secondary">
              favorite
            </span>
            <span className="font-label-md text-xs font-semibold text-primary">
              Saved Formulations (Wishlist)
            </span>
          </div>
          <span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
        </button>

        <button
          onClick={() => showToast('Address: Apothecary Villa, 14th Main, Bangalore')}
          className="p-3.5 flex items-center justify-between hover:bg-surface-container-low transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px] text-secondary">
              location_on
            </span>
            <span className="font-label-md text-xs font-semibold text-primary">
              Saved Delivery Addresses
            </span>
          </div>
          <span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
        </button>

        <button
          onClick={() => showToast('Connecting you to Dr. Sharma, Senior Dermatologist...')}
          className="p-3.5 flex items-center justify-between hover:bg-surface-container-low transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px] text-secondary">
              support_agent
            </span>
            <span className="font-label-md text-xs font-semibold text-primary">
              Apothecary Derma Support
            </span>
          </div>
          <span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
        </button>
      </div>

      <button
        onClick={() => {
          showToast('Signed out from YENA session');
          onNavigate('home');
        }}
        className="w-full py-3 rounded-full bg-surface-container text-on-surface font-label-md text-xs font-medium hover:bg-surface-container-high transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
};
