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
