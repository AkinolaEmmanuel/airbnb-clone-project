export interface Property {
    id: number;
    title: string;
    description: string; 
    location: string;
    price: number;
    rating: number;
    reviewCount: number;
    images: string[];
    features: string[];
    propertyType: string;
    isFavorite?: boolean;
    host: {
        name: string;
        avatar: string;
        isSuperhost: boolean;
    };
    availability: {
        startDate: string;
        endDate: string;
    };
    reviews: {
        user: string;
        comment: string;
        rating: number;
    }[];
    rules: string[];
    amenities: string[];
    safetyFeatures: string[];
    createdAt: string;
    updatedAt: string;
}

export interface PropertyCategory {
    id: number;
    title: string;
    properties: Property[];
}

export interface PropertyCategoryByLocation {
    location: string;
    properties: Property[];
}

export interface PropertyCategoryByType {
    propertyType: string;
    properties: Property[];
}

export interface PropertyFilter {
    location?: string;
    priceRange?: [number, number];
    rating?: number;
    propertyType?: string;
    features?: string[];
    amenities?: string[];
    availabilityDate?: string;
}