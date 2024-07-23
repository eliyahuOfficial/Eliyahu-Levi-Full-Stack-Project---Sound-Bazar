import { ReactNode } from "react";
import { IName } from "./types.d copy 2";

export type LoginUser = {
    email: string;
    password: string;
};


export type IName = {
    first: string;
    middle?: string;
    last: string;
};


export type IImage = {
    alt: string;
    url: string;
};

export type RegisterUser = {
    [x: string]: any;
    title: ReactNode;
    subtitle: ReactNode;
    name: IName
    phone: string;
    email: string;
    password: string;
    image?: IImage;
    address: {
        state?: string;
        country: string;
        city: string;
        street: string;
        houseNumber: number;
        zip: number;
    };
    isBusiness: boolean;
};



export type CardType = {
    [x: string]: any;
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    web: string;
    image: {
        url: string;
        alt: string;
        _id: string;
    };
    sound: {
        url: string;

    }

    address: {
        state: string;
        country: string;
        city: string;
        street: string;
        houseNumber: number;
        zip: number;
        _id: string;
    };
    soundNumber: number;
    likes: string[];
    comments: CommentType[];
    user_id: string;
    createdAt: string;
    searchQuery: string;
    __v: number;
};

export type CreateType = {
    [x: string]: any;
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    web: string;
    image: {
        url: string;
        alt: string;

    };
    address: {
        state: string;
        country: string;
        city: string;
        street: string;
        houseNumber: number;
        zip: number;

    };

};


export type CommentType = {
    [x: string]: any;
    user: {
        _id: string;
        name: {
            first: string;
        };
        image?: {
            url: string;
        };
        email: string;
    };
    _doc: {
        _id: string;
        userId: string;
        cardId: string;
        text: string;
        createdAt: string;
    };
};

export type ErrorType = {
    status: number;
    message: string
    details: string;
};


export type JwtDecodeType = {
    _id: string;
    iat: number;
    exp: number;
    isBusiness: boolean;
    isAdmin: boolean;

}



export type NavBarType = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}


export type AuthContextType = {
    isLoggedIn: boolean;
    isBusiness: boolean;
    isAdmin: boolean;
    login: (jwt: string) => void;
    logout: () => void;
}


export type FCC = ({ children: ReactNode }) => ReactNode