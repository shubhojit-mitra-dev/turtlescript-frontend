export interface Notification {
    id: string
    title: string
    description: string
    timestamp: string
    isRead: boolean
    type: 'comment' | 'like' | 'follow' | 'system'
}

export interface ImagePost {
    id: string
    url: string
    title: string
    description: string
}

export interface FeaturedImage {
    id: string
    url: string
    title: string
    description: string
}

export interface NewsItem {
    id: string
    title: string
    description: string
    image: string
    date: string
    time: string
    author: string
    url: string
}
export interface Hackathon {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    type: 'online' | 'offline';
    techStack: string[];
    image: string;
  }
  
  export interface FilterState {
    type: 'all' | 'online' | 'offline';
    city: string;
    techStack: string[];
  }
  
  export interface ApplicationFormData {
    name: string;
    email: string;
    phone: string;
    resume: File | null;
    github: string;
    linkedin: string;
    experience: string;
    whyJoin: string;
  }
  
  