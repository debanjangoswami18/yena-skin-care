export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: 'serums' | 'cleansers' | 'moisturizers' | 'sunscreens' | 'lip-body' | 'toners' | 'kits' | string;
  volume: string;
  price: number;
  originalPrice: number;
  discountBadge?: string;
  rating: number;
  reviewCount: number | string;
  description: string;
  image: string;
  gallery?: string[];
  tag?: string;
  heroTag?: string;
  badgeType?: 'bestseller' | 'hydration' | 'ceramide' | 'nowhitecast' | 'discount' | string;
  skinType?: string[];
  concerns?: string[];
  concern?: string;
  highlights?: { icon: string; title: string; subtitle: string }[];
  clinicalResults?: { stat: string; label: string }[];
  volumes?: { size: string; price: number; originalPrice: number; note: string; discountText?: string }[];
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  name?: string;
  subtitle?: string;
  volume?: string;
  selectedVolume?: string;
  price: number;
  originalPrice?: number;
  image?: string;
  tag?: string;
  quantity: number;
}

export interface ComplimentarySample {
  id: string;
  name: string;
  volume: string;
  type: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  verified: boolean;
  time: string;
  rating: number;
  text: string;
  purchased: string;
  skinType?: string;
  initials?: string;
}
