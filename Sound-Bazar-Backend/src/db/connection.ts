
import mongoose from "mongoose";
import initDB from "./init-db";

const connect = async () => {
    const connectionString = process.env.DB_CONNECTION_STRING;

    if (!connectionString) {
        console.log("DB_CONNECTION_STRING is not defind in your .env file");
        return;
    }
    try {
        await mongoose.connect(connectionString);

        await initDB();

        console.log("<< Database Connected >>");
    } catch (e) {
        console.log(e);
    }
};

export default connect;
