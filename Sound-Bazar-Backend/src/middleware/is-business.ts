import { RequestHandler } from "express";
import SoundCardsError from "../errors/SoundCardsError";
import { validateToken } from "./validate-token";

const _isBusiness: RequestHandler = (req, res, next) => {
    const { isBusiness } = req.payload;

    if (isBusiness) {
        return next();
    }

    next(new SoundCardsError(403, "Must be a business"))
}

export const isBusiness = [validateToken, _isBusiness];
