export interface StatItem {
  label: string;
  value: string;
  unit?: string;
}

export type CategoryType = 'expressions' | 'lifestyle' | 'fashion' | 'traditional' | 'measurements';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: CategoryType;
  title: string;
}

export interface ProfileGalleryItem {
  url: string;
  category: string;
  alt: string;
}

export interface ModelProfile {
  name: string;
  profession: string;
  status: string;
  age: string;
  height: string;
  location: string;
  instagram: string;
  phone: string;
  email: string;
  parentManager: string;
  shortBio: string;
  detailedBio: string;
  heroImage: string;
  gallery: ProfileGalleryItem[];
}
