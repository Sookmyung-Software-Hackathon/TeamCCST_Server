"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
require("reflect-metadata");
require("./config/env");
require("./config/keys");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const tsoa_1 = require("tsoa");
const error_1 = require("./utils/error");
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '100mb' }));
app.use(express_1.default.urlencoded({ limit: '100mb', extended: false }));
try {
    (0, routes_1.RegisterRoutes)(app);
}
catch (e) {
    (_b = (_a = express_1.default.request).next) === null || _b === void 0 ? void 0 : _b.call(_a, e);
}
app.use(function errorHandler(err, req, res, next) {
    let reason;
    let location;
    let status;
    if (err instanceof tsoa_1.ValidateError) {
        const { status: localStatus, name, fields } = err;
        reason = name;
        const fieldKey = Object.keys(fields)[0];
        location = fields[fieldKey].message;
        status = localStatus;
    }
    else {
        const customError = (0, error_1.errorHandling)(err);
        const { status: localStatus, error } = customError;
        reason = error.reason;
        location = error.location;
        status = localStatus;
    }
    if (status >= 500) {
        res.status(status).json({
            status,
            success: false,
            message: "Internal Server Error"
        });
    }
    else {
        res.status(status).json({
            status,
            success: false,
            message: reason
        });
    }
    next();
});
module.exports = app;
//# sourceMappingURL=index.js.map