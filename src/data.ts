// Data for Aadrit Mangla's premium portfolio
import { GalleryItem, StatItem, ModelProfile, CategoryType } from './types';

export const modelProfile: ModelProfile = {
  name: "Aadrit Mangla",
  profession: 'Expressive Child Creator',
  status: "Active",
  age: "8 Yrs",
  height: '126 cm',
  location: "New Delhi, India",
  instagram: '@aadritmangla',
  phone: "+91-9971271291",
  email: "aadritmangla@gmail.com",
  parentManager: 'Represented by Parents (Rahul Mangla)',
  shortBio: 'Aadrit is an expressive child creator who loves performing, dancing, and bringing stories to life. A smile people remember. An energy cameras love.',
  detailedBio: "Aadrit is happiest when he's performing.\nWhether he's dancing, creating content, or simply having fun in front of the camera, he brings genuine energy and a smile that's hard to miss.",

  // THE HERO IMAGE
  heroImage: '/images/hero.webp',
  gallery: [
    {
      url: '/images/gallery/aadrit-main-headshot.webp',
      category: "Portrait",
      alt: "Aadrit Mangla - Signature High-End Kids Casting Headshot"
    },
    {
      url: '/images/gallery/aadrit-commercial-2.webp',
      category: "Portrait",
      alt: "Aadrit Mangla - Expressive Child Model Portrait"
    },
    {
      url: '/images/gallery/aadrit-traditional.webp',
      category: "Traditional",
      alt: "Aadrit Mangla - Traditional Indian Festive Wear Casting"
    },
    {
      url: '/images/gallery/aadrit-prada-milano.webp',
      category: "Editorial",
      alt: "Aadrit Mangla - High-Fashion Magazine Editorial"
    },
    {
      url: '/images/gallery/aadrit-travel.webp',
      category: "Outdoor",
      alt: "Aadrit Mangla - Natural Light Outdoor Child Modeling"
    },
    {
      url: '/images/gallery/aadrit-red-shirt.webp',
      category: "Action",
      alt: "Aadrit Mangla - Dynamic Action and Stunt Pose Child Actor"
    },
    {
      url: '/images/gallery/aadrit-full-length.webp',
      category: "Full Length",
      alt: "Aadrit Mangla - Full Length Commercial Model Pose"
    }
  ]
};

export const modelStats: StatItem[] = [
  { label: 'Age', value: '8', unit: 'Years' },
  { label: 'Height', value: '126', unit: 'cm' },
  { label: 'Shoes', value: 'US 9', unit: '' },
  { label: 'Bust / Chest', value: '26', unit: 'inches' },
  { label: 'Waist', value: '26', unit: 'inches' },
  { label: 'Hips', value: '26', unit: 'inches' },
  { label: 'Dress Size', value: 'US 6', unit: '' },
  { label: 'Hair Color', value: 'Black', unit: '' },
  { label: 'Eye Color', value: 'Black', unit: '' },
  { label: 'Base Location', value: 'New Delhi', unit: 'India' },
];

// UNIFIED GALLERY
export const galleryItems: GalleryItem[] = modelProfile.gallery.map((item, index) => {
  const c = item.category.toLowerCase();
  let category: CategoryType = 'fashion';
  if (c.includes('portrait') || c.includes('headshot')) {
    category = 'expressions';
  } else if (c.includes('traditional')) {
    category = 'traditional';
  } else if (c.includes('outdoor') || c.includes('action')) {
    category = 'lifestyle';
  } else if (c.includes('editorial') || c.includes('full') || c.includes('commercial')) {
    category = 'fashion';
  }

  return {
    id: `g-${index}`,
    src: item.url,
    alt: item.alt,
    category,
    title: item.alt.split(" - ")[1] || item.category,
  };
});

export const testimonialNote = {
  quote: "Aadrit brings fantastic light and natural focus to the set. He takes direction beautifully and handles shoots with great calmness.",
  author: "SANDEEP",
  choreographer: "MERAKI DANCE STUDIO"
};
