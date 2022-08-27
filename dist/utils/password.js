"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.saveEncryptedPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saveEncryptedPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const SALT_PARAM = 5;
    try {
        if (!password)
            return password;
        const hashedPasswd = yield bcrypt_1.default.hash(password, SALT_PARAM);
        if (!hashedPasswd)
            throw new Error('Password');
        return hashedPasswd;
    }
    catch (e) {
        throw e;
    }
});
exports.saveEncryptedPassword = saveEncryptedPassword;
const comparePassword = (passwordInput, password) => __awaiter(void 0, void 0, void 0, function* () {
    const isCorrect = yield bcrypt_1.default.compare(passwordInput, password);
    return isCorrect;
});
exports.comparePassword = comparePassword;
//# sourceMappingURL=password.js.map