import dotenv from "dotenv";
let { parsed } = dotenv.config();
if (parsed === undefined) parsed = {};

const { NODE_ENV } = parsed;

const config = {
    NODE_ENV:NODE_ENV ? NODE_ENV : process.env.NODE_ENV,
};

export default config;