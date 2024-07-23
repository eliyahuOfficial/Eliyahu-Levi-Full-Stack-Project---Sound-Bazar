import { Router } from "express";
import { validateToken } from "../middleware/validate-token";
import { validateCard } from "../middleware/joi";
import { cardService, commentService } from "../services/card-service";
import { isBusiness } from "../middleware/is-business";
import { Logger } from "../logs/logger";
import SoundCardsError from "../errors/SoundCardsError";
import { isAdminOrSelf } from "../middleware/is-admin-or-self";
import Comment from '../db/models/comment-model';



const router = Router();

router.post("/", ...isBusiness, validateCard, async (req, res, next) => {
    try {
        const userId = req.payload._id;
        if (req.payload.isBusiness) {
            const result = await cardService.createCard(req.body, userId);
            res.status(201).json(result);

        } else {
            res.status(400).json({ message: "Only business users may create cards" });
        }

    } catch (e) {
        next(e)
    }

});

router.post('/comments', validateToken, async (req, res, next) => {
    const { cardId, text } = req.body;


    try {
        const userId = req.payload._id;
        const newComment = new Comment({ userId, cardId, text });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get("/comments/:id", async (req, res, next) => {
    try {
        const comments = await commentService.getAllCommentsById(req.params.id);
        if (!comments) {
            Logger.error("No ID provided");
            throw new SoundCardsError(400, "No ID provided");
        }
        res.json(comments)
    } catch (e) {
        next(e);
    }

});


router.get("/", async (req, res, next) => {
    try {
        const cards = await cardService.getAllCards();
        res.json(cards);
    } catch (e) {
        next(e);
    }
});

router.get("/my-cards", validateToken, async (req, res, next) => {
    try {
        const cards = await cardService.getUserCards(req.payload._id);
        if (!cards) {
            Logger.error("No ID provided");
            throw new SoundCardsError(400, "No ID provided");
        }
        res.json(cards);
    } catch (e) {
        next(e);
    }
});


router.get("/:id", async (req, res, next) => {
    try {
        const card = await cardService.getCardById(req.params.id);
        if (!card) {
            Logger.error("No ID provided");
            throw new SoundCardsError(400, "No ID provided");
        }
        res.json(card);
    } catch (e) {
        next(e);
    }
});


router.put("/:id", validateToken, validateCard, async (req, res, next) => {
    try {
        const result = await cardService.updateCard(req.params.id, req.body);
        if (!result) {
            Logger.error("No ID provided");
            throw new SoundCardsError(400, "No ID provided");
        }
        res.json(result);
    } catch (e) {
        next(e);
    }
});


router.patch("/:id", validateToken, async (req, res, next) => {
    try {
        const result = await cardService.likeCard(req.params.id, req.payload._id);
        res.json(result);
        Logger.log('Like successfully completed')
    } catch (e) {
        next(e);
    }
});


router.delete("/:id", ...isAdminOrSelf, validateToken, async (req, res, next) => {

    try {
        await cardService.deleteCard(req.params.id);

        res.json("Card are Deleted");

    } catch (e) {
        next(e);
    }
});



export { router as cardsRouter }

