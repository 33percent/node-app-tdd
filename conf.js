import dotenv from "dotenv";
let { parsed } = dotenv.config();
/* istanbul ignore if */
if (parsed === undefined) parsed = {};

const { NODE_ENV,PORT } = parsed;

const config = {
    NODE_ENV:NODE_ENV ? NODE_ENV :process.env.NODE_ENV,
    PORT:PORT ? PORT : process.env.PORT,
};

export default config;