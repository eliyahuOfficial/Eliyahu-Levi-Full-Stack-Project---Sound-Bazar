import { Logger } from "../logs/logger";
import { usersService } from "../services/users-service";
import { cardService } from "../services/card-service";
import { comments, cards, users } from "./initial-data";
import User from "./models/user-model";
import Comment from "./models/comment-model";

const shuffleArray = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const initDB = async () => {
    const usersCount = await User.countDocuments();

    if (usersCount !== 0) {
        Logger.log("Database already initialized.");
        return;
    }

    const shuffledComments = shuffleArray(comments);

    let commentIndex = 0;

    for (let i = 0; i < users.length; i++) {
        const userData = users[i];
        const createdUser = await usersService.createUser(userData);

        const cardData = {
            ...cards[i % cards.length],
            userId: createdUser._id.toString(),
        };

        const createdCard = await cardService.createCard(cardData, createdUser._id.toString());

        const commentsPerCard = Math.ceil(shuffledComments.length / users.length);

        for (let j = 0; j < commentsPerCard; j++) {
            if (commentIndex >= shuffledComments.length) {
                commentIndex = 0;
            }

            const commentData = {
                ...shuffledComments[commentIndex],
                cardId: createdCard._id.toString(),
                userId: createdUser._id.toString(),
            };

            try {
                await Comment.create(commentData);
            } catch (error) {
                Logger.error(`Error creating comment: ${error.message}`);
            }

            commentIndex++;
        }
    }

    Logger.log("Users, Sound Cards, and Comments Saved");
};

export default initDB;
