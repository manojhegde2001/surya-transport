export interface VideoData {
    id: string;
    url: string;
    title: string;
    description?: string;
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
  