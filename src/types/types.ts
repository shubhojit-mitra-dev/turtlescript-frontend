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

export interface WebsiteFormData {
    formType: 'Commercial' | 'Personal'
    firmName: string
    personName: string
    websiteName: string
    projectType: string
    tag: 'eCommerce' | 'school' | 'cafe' | 'shops' | 'others'
    shortMessage: string
    description: string
    phoneNumber: string
  }

export interface CardProps {
    image: string
    title: string
    description: string
  }
