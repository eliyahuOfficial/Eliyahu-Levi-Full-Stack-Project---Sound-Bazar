import _ from "underscore";
import { ICardInput, IComment, IUserInput } from "../@types/@types";
import Card from "../db/models/card-model";
import Comment from "../db/models/comment-model";
import { Logger } from "../logs/logger";
import { isAdmin } from "../middleware/is-admin";
import { usersService } from "./users-service";


const generateSoundNumber = async () => {


    while (true) {
        const r = _.random(1_000_000, 9_999_999);
        const dbRes = await Card.findOne({ soundNumber: r });
        if (!dbRes) {
            return r;
        }
    }
}


export const commentService = {

    getAllCommentsById: async (cardId: string) => {
        const comments: IComment[] = await Comment.find({ cardId: cardId })
        const getInfoUserComment = await Promise.all(
            comments.map(async (comment: IComment) => {
                const user: any = await usersService.getUserById(comment.userId);
                return {
                    ...comment,
                    user
                };
            })
        );

        return getInfoUserComment;
    },




};


export const cardService = {


    createCard: async (data: ICardInput, userId: string) => {

        const card = new Card(data);
        card.userId = userId;
        card.soundNumber = await generateSoundNumber();

        Logger.log(card.soundNumber);
        return card.save();
    },

    getAllCards: async () => Card.find(),

    getUserCards: async (userId: string) => {
        return Card.find({ userId: userId });
    },


    getCardById: async (id: string) => {
        return Card.findById(id);
    },


    updateCard: async (id: string, data: ICardInput) => {
        return Card.findByIdAndUpdate(id, data, { new: true });
    },


    likeCard: async (id: string, userId: string) => {
        const card = await Card.findById(id);
        if (!card) {
            throw new Error("Card not found");
        }

        if (!card.likes.includes(userId)) {
            card.likes.push(userId);
        }
        return card.save();
    },

    deleteCard: async (id: string) => {
        return Card.findByIdAndDelete(id);
    },


};
