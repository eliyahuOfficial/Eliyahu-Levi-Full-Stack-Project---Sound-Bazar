import { ValidationError } from "joi";
import { ErrorRequestHandler } from "express";

import { MongoServerError } from "mongodb";
import SoundCardsError from "../errors/SoundCardsError";
import { Logger } from "../logs/logger";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof SoundCardsError) {
        return res.status(err.status).json(err);
    }

    if (err && err.name && err.name == "CastError" && err.path && err.value) {
        Logger.error("Invalid object id");
        return res
            .status(400)
            .json({ message: "Invalid object id", path: err.path, value: err.value });
    }

    if (err instanceof SyntaxError) {
        Logger.error("Invalid JSON");
        return res.status(400).json({ message: "Invalid JSON" });
    }

    if (err instanceof MongoServerError && err.code === 11000) {
        Logger.error("Duplicate key - Must be unique");
        return res.status(400).json({
            message: "Duplicate key - Must be unique",
            value: err.keyValue,
        });
    }

    if (err instanceof ValidationError) {
        Logger.error(err.message);
        return res.status(400).json({ message: err.message });
    }


    Logger.error(err.message);
    return res.status(500).json(err);
};

export default errorHandler;