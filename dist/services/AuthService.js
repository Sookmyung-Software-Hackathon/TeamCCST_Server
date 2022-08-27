"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const typeorm_1 = require("typeorm");
const provideSingleton_1 = require("../config/provideSingleton");
const UserRepository_1 = require("../repository/UserRepository");
const error_1 = require("../utils/error");
let AuthService = AuthService_1 = class AuthService {
    createUser(userCreateDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getCustomRepository)(UserRepository_1.UserRepository);
            try {
                const existCheckUser = yield userRepository.findOne({
                    email: userCreateDto.email
                });
                console.log(existCheckUser);
                if (existCheckUser)
                    throw (0, error_1.generateError)('Duplicate');
                const newUser = userRepository.create(userCreateDto);
                yield userRepository.save(newUser);
                const data = {
                    id: newUser.id
                };
                return data;
            }
            catch (e) {
                throw e;
            }
        });
    }
    loginUser(userLoginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getCustomRepository)(UserRepository_1.UserRepository);
            try {
                const user = yield userRepository.findOne({
                    email: userLoginDto.email
                });
                if (!user)
                    throw (0, error_1.generateError)('Not Found');
                if (!(yield user.isCorrectPassword(userLoginDto.password))) {
                    throw (0, error_1.generateError)('Invalid');
                }
                const data = {
                    name: user.name,
                    email: user.email
                };
                return data;
            }
            catch (e) {
                throw e;
            }
        });
    }
};
AuthService = AuthService_1 = __decorate([
    (0, provideSingleton_1.provideSingleton)(AuthService_1)
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map