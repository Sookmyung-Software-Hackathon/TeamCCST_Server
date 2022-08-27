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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreate1651740511420 = void 0;
class UserCreate1651740511420 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE user(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            email VARCHAR(500) NOT NULL UNIQUE,
            name VARCHAR(255) NOT NULL,
            password VARCHAR(1000) NOT NULL
        )`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.UserCreate1651740511420 = UserCreate1651740511420;
//# sourceMappingURL=1651740511420-UserCreate.js.map