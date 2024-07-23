import chalk from 'chalk';
import fs from 'node:fs';
import figlet from 'figlet';
import { RequestHandler } from "express";


const logger: RequestHandler = (req, res, next) => {

    const timestamp = new Date().toISOString();
    const logMessage = `${req.method} ${req.url}`;
    const queryParams = JSON.stringify(req.query);


    figlet.text(req.method, (err: any, methodArt: unknown) => {
        if (err) {
            console.error(chalk.bgRed.bold('Error generating ASCII art'), err);
            return;
        }


        console.log(
            chalk.blueBright(methodArt),
            chalk.bgYellow.bold(req.url),
            chalk.bgGreen.bold('Timestamp:'),
            chalk.green(timestamp),
            chalk.bgCyan.bold('Query Params:'),
            chalk.cyan(queryParams)
        );


        fs.appendFile('logs.txt', `${timestamp} ${logMessage} Query Params: ${queryParams}\n`, (err) => {
            if (err) {
                console.error(chalk.bgRed.bold('Error writing to log file'), err);
            }
        });


        next();
    });
}

export { logger };
export default logger;