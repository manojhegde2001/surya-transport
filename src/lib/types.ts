export interface VideoData {
  id: string;
  title: string;
  url: string;
  section: 'hero' | 'operations';
  order: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}
