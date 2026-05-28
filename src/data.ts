// Data for Aadrit Mangla's premium portfolio
import { GalleryItem, StatItem, ModelProfile, CategoryType } from './types';

export const modelProfile: ModelProfile = {
  name: "Aadrit Mangla",
  profession: 'Professional Talent',
  status: "Active",
  age: "8 Yrs",
  height: '126 cm',
  location: "New Delhi, India",
  instagram: '@aadritmangla',
  phone: "+91-9971271291",
  email: "aadritmangla@gmail.com",
  parentManager: 'Represented by Parents (Rahul Mangla)',
  shortBio: 'Aadrit is an active, friendly 8-year-old based in New Delhi. Naturally expressive and comfortable in front of the camera, he brings genuine warmth and joy to kids apparel, print, and commercial shoots.',
  detailedBio: 'Based in New Delhi, Aadrit brings a cheerful, natural presence and remarkable on-camera confidence to high-end commercial campaigns. He adapts seamlessly to directorial cues, maintains high energy during active print sessions, and easily transitions between casual, editorial, and traditional Indian styling. All schedules, brand collaborations, and bookings are thoughtfully managed by his parents to ensure a highly professional and positive production experience.',
  
  // THE HERO IMAGE (High-res direct link)
  heroImage: "https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Headshot/Headshot%20Aadrit.webp", 
  gallery: [
    {
      url: "https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Headshot/Headshot%20Aadrit.webp",
      category: "Portrait",
      alt: "Aadrit Mangla - Signature High-End Kids Casting Headshot"
    },
    {
      url: "https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Gallery/Headshot.webp",
      category: "Portrait",
      alt: "Aadrit Mangla - Expressive Child Model Portrait"
    },
    {
      url: "https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Gallery/aadrit_traditional_1779890120169.webp",
      category: "Traditional",
      alt: "Aadrit Mangla - Traditional Indian Festive Wear Casting"
    },
    {
      url: "https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Gallery/Magzine%20COver.webp",
      category: "Editorial",
      alt: "Aadrit Mangla - High-Fashion Magazine Editorial"
    },
    {
      url: "https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Gallery/Outdoor%20Pose.webp",
      category: "Outdoor",
      alt: "Aadrit Mangla - Natural Light Outdoor Child Modeling"
    },
    {
      url: "https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Gallery/Stunt%20Shot.webp",
      category: "Action",
      alt: "Aadrit Mangla - Dynamic Action and Stunt Pose Child Actor"
    },
    {
      url: "https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Gallery/Full%20Length.webp",
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
  let category: CategoryType = 'commercial';
  if (c.includes('portrait')) category = 'headshots';
  else if (c === 'traditional') category = 'traditional';
  else if (c.includes('full')) category = 'full-length';
  
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
