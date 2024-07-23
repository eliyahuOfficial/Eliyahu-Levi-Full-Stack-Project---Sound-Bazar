import axios from "axios";
import { CreateType } from "../@types/types";

export const baseUrl = "http://localhost:8080/api/v1";

export const getCards = () => axios.get(`${baseUrl}/cards`);



export const getCardById = (id: string) => axios.get(`${baseUrl}/cards/${id}`);

export const myCardById = () => {
    return axios.get(`${baseUrl}/cards/my-cards`, {
        headers: {
            'x-auth-token': localStorage.getItem('token'),
        }
    });
}

export const createCard = (data: CreateType) => {
    return axios.post(`${baseUrl}/cards`, data, {
        headers: {
            'x-auth-token': localStorage.getItem('token'),
        },
    });
}


export const getComments = (cardId: string) => axios.get(`${baseUrl}/cards/comments/${cardId}`);

export const addComment = (cardId: string, text: string) => {
    return axios.post(`${baseUrl}/cards/comments`, { cardId, text }, {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    });
};



export const editCard = (data: CreateType, id: string | undefined) => {
    return axios.put(`${baseUrl}/cards/${id}`, data, {
        headers: {
            'x-auth-token': localStorage.getItem('token'),
        },
    });
}

export const deleteCard = (id: string) => {
    return axios.delete(`${baseUrl}/cards/${id}`, {
        headers: {
            'x-auth-token': localStorage.getItem('token'),
        },
    });
};

export const likeCard = (id: string) => {
    return axios.patch(`${baseUrl}/cards/${id}`, { like: "user_id" },
        {
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
        });
};




const cards = {
    getCards,
    getCardById,
    createCard,
    myCardById,
    editCard,
    deleteCard,
    likeCard,
    addComment,
}

export default cards;
