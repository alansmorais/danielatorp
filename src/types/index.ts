export interface Testimonial {
  quote: string;
  author: string;
}

export interface WorkshopSeason {
  name: string;
  date: string;
  focus: string;
  description: string;
  image: string;
}

export interface Workshop {
  id: string;
  slug: string;
  title: string;
  tag: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string[];
  heroImage: string;
  cardImage: string;
  quote?: string;
  bulletsTitle?: string;
  bullets?: string[];
  forMenBullets?: string[];
  forWomenBullets?: string[];
  levels?: { title: string; desc: string }[];
  targetAudience?: string[];
  daysProgram?: { title: string; desc: string }[];
  location: string;
  timing: string;
  whatToBring?: string[];
  catering?: string;
  priceNOK?: string;
  priceCZK: string;
  priceNote?: string;
  testimonials?: Testimonial[];
  hosts?: string;
  seasons?: WorkshopSeason[];
  pusteritual?: {
    title: string;
    description: string[];
    image: string;
  };
}

export interface Pillar {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  image: string;
  bannerImage?: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
  formType: string;
  workshopId: string;
  workshopTitle: string;
}

export interface ModalContent {
  isOpen: boolean;
  tag: string;
  title: string;
  body: string | React.ReactNode;
  actionButtonText?: string;
  onAction?: () => void;
}
