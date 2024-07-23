import { RequestHandler } from "express";
import { Logger } from "../logs/logger";



const notFound: RequestHandler = (req, res, next) => {
    Logger.error("Not Found")
    res.status(404)

        .json({
            message: "Not Found",
            url: req.originalUrl

        });

};

export { notFound };
export default notFound;


