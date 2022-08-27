"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateError = exports.errorHandling = void 0;
const errorHandling = (e) => {
    const result = {
        status: (e.name === 'Bad Request') ? 400 : (e.name === 'Validation') ? 422 : (e.name === 'Unauthorized')
            ? 401 : (e.name === 'Forbidden' || e.name === 'Unauthenticated') ? 403 : (e.name === 'Not Found') ? 404 : (e.name === 'Duplicate' || e.name === 'Invalid' || e.name === 'Not Allowed') ? 409 : 500,
        error: {
            reason: e.name,
            location: e.message
        }
    };
    return result;
};
exports.errorHandling = errorHandling;
const generateError = (name, message) => {
    const e = new Error();
    e.name = name;
    e.message = message || e.message;
    return e;
};
exports.generateError = generateError;
//# sourceMappingURL=error.js.map