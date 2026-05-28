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
  detailedBio: 'Based in New Delhi, Aadrit brings a cheerful, natural presence to every shoot. He adapts comfortably to direction, stays engaged during sessions, and enjoys exploring a variety of styles from casual and school wear to traditional Indian looks. All schedules, collaborations, and bookings are thoughtfully managed by his supportive parents to ensure a balanced, positive, and child-friendly experience.',
  
  // THE HERO IMAGE (High-res direct link)
  heroImage: "https://i.ibb.co/hJGNzK0X/Headshot-Aadrit.jpg", 
  gallery: [
    {
      url: "https://i.ibb.co/hJGNzK0X/Headshot-Aadrit.jpg",
      category: "Portrait",
      alt: "Aadrit Mangla - Signature High-End Casting Headshot"
    },
    {
      url: "https://i.ibb.co/bhqMGWp/Headshot.jpg",
      category: "Portrait",
      alt: "Aadrit Mangla - Close-up expressive portrait"
    },
    {
      url: "https://i.ibb.co/0jbfWhXP/aadrit-traditional-1779890120169.png",
      category: "Traditional",
      alt: "Aadrit Mangla - Traditional Indian Festive Wear"
    },
    {
      url: "https://i.ibb.co/YFQqmy2F/Magzine-COver.png",
      category: "Editorial",
      alt: "Aadrit Mangla - High-fashion magazine cover"
    },
    {
      url: "https://i.ibb.co/W4j659Rs/Outdoor-Pose.png",
      category: "Outdoor",
      alt: "Aadrit Mangla - Natural lighting outdoor shoot"
    },
    {
      url: "https://i.ibb.co/Kc7jm4x1/Stunt-Shot.png",
      category: "Action",
      alt: "Aadrit Mangla - Dynamic action and stunt pose"
    },
    {
      url: "https://dphmyxzzoukqiilpmrsv.supabase.co/storage/v1/object/public/portfolio/Gallery/Full%20Length.webp",
      category: "Full Length",
      alt: "Aadrit Mangla - Full length pose"
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
