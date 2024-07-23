import { RequestHandler } from "express";
import SoundCardsError from "../errors/SoundCardsError";
import { validateToken } from "./validate-token";

const _isAdmin: RequestHandler = (req, _, next) => {
    const { isAdmin } = req.payload;

    if (isAdmin) {
        return next();
    }

    next(new SoundCardsError(403, "Must be a admin"))
}

export const isAdmin = [validateToken, _isAdmin];
