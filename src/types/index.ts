export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category:
    | 'Espresso Base'
    | 'Signature'
    | 'Coffee'
    | 'Milk Base'
    | 'Healthy Juice'
    | 'Mocktail'
    | 'Tea'
    | 'Juice'
    | 'Dessert'
    | 'Additional'
    | 'Indomie Bangladesh'
    | 'Indomie Goreng/Kuah'
    | 'Mie Aceh'
    | 'Ifumie'
    | 'Mihun'
    | 'Kwetiau'
    | 'Snack'
    | 'Rice Bowl'
    | 'Nasi Goreng'
    | 'Penyet/Pecak'
    | 'Menu Lainnya'
    | 'Sayur';

  description: string;
  image: string;
  featured: boolean;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'Makanan' | 'Minuman' | 'Interior Cafe' | 'Suasana Cafe';
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'unread' | 'read' | 'replied';
  reply: string;
}

export const MENU_CATEGORIES = [
  "Espresso Base",
  "Signature",
  "Coffee",
  "Milk Base",
  "Healthy Juice",
  "Mocktail",
  "Tea",
  "Juice",
  "Dessert",
  "Additional",
  "Indomie Bangladesh",
  "Indomie Goreng/Kuah",
  "Mie Aceh",
  "Ifumie",
  "Mihun",
  "Kwetiau",
  "Snack",
  "Rice Bowl",
  "Nasi Goreng",
  "Penyet/Pecak",
  "Menu Lainnya",
  "Sayur"
] as const;

export const GALLERY_CATEGORIES = [
  'Makanan',
  'Minuman',
  'Interior Cafe',
  'Suasana Cafe',
] as const;