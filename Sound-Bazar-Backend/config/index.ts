import { config } from "dotenv";

const configDevEnv = () => {

    config({ path: "config/.env" });

    const mode = process.env.NODE_ENV;

    config({ path: `config/${mode}.env` });
};

export default configDevEnv;

