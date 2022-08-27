"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
const keys_1 = __importDefault(require("./keys"));
const config = {
    "type": "mysql",
    "host": keys_1.default.DB,
    "port": 3306,
    "username": keys_1.default.MYSQL_USERNAME,
    "password": keys_1.default.MYSQL_PASSWORD,
    "database": keys_1.default.MYSQL_DATABASE,
    "synchronize": false,
    "logging": false,
    "entities": [path_1.default.join(__dirname, "/../entity/**/*.{js,ts}")],
    "migrations": [path_1.default.join(__dirname, "/../migration/**/*.{js,ts}")],
    "cli": {
        "entitiesDir": path_1.default.join(__dirname, "/../entity"),
        "mirationsDir": path_1.default.join(__dirname, "/../migration")
    }
};
module.exports = config;
//# sourceMappingURL=ormConfig.js.map