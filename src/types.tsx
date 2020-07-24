export interface Owner {
    avatar: string;
    name: string;
    isSuper: boolean;
}

export interface Offer {
    title: string;
    img: string;
    price: number;
    rating: number;
    type: string;
    isItPremium: boolean;
    isItFavorite: boolean;
    id: number;
    cityName: string;
    images: string[];
    description: string;
    bedrooms: number;
    guests: number;
    appliances: string[];
    owner: Owner;
}

export interface Cities {
    cityName: string;
    cityCoords: number[];
}

export interface Comment {
    comment: string;
    rating: string;
}

export interface Review {
    reviewName: string;
    reviewAvatar: string;
    reviewGrade: number;
    reviewText: string;
    reviewTime: string;
    reviewId: number;
}
