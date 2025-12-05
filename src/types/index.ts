export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WashMode {
  id: string;
  name: string;
  description: string;
  temperature: string;
  spin: string;
  washTime: string;
  dryTime: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  text: string;
  usage: string; // "Пользуюсь несколько месяцев"
  date?: string;
}

export interface AppLink {
  platform: 'ios' | 'android';
  url: string;
  badge: string;
}
