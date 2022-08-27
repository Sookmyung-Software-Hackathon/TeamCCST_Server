"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapSuccess = void 0;
const wrapSuccess = (result, message, status) => {
    return {
        status,
        success: true,
        message,
        data: result
    };
};
exports.wrapSuccess = wrapSuccess;
//# sourceMappingURL=success.js.map