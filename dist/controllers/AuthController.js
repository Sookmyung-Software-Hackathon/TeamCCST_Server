"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var AuthController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const inversify_1 = require("inversify");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const tsoa_1 = require("tsoa");
const AuthService_1 = require("../services/AuthService");
const success_1 = require("../utils/success");
let AuthController = AuthController_1 = class AuthController extends tsoa_1.Controller {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    createUser(userCreateDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.authService.createUser(userCreateDto);
                this.setStatus(201);
                return (0, success_1.wrapSuccess)(result, "회원가입 성공", 201);
            }
            catch (e) {
                throw e;
            }
        });
    }
    loginUser(userLoginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.authService.loginUser(userLoginDto);
                this.setStatus(451);
                return (0, success_1.wrapSuccess)(result, "로그인 성공", 200);
            }
            catch (e) {
                throw e;
            }
        });
    }
};
__decorate([
    (0, tsoa_1.SuccessResponse)(201, 'Created'),
    (0, tsoa_1.Response)(409, 'Duplicate - 이미 존재하는 유저'),
    (0, tsoa_1.Post)('/signup'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, tsoa_1.SuccessResponse)(451, 'Success'),
    (0, tsoa_1.Response)(404, "Not Found - 이메일에 해당하는 사용자 정보 없음"),
    (0, tsoa_1.Response)(409, "Invalid - 비밀번호가 올바르지 않음"),
    (0, tsoa_1.Post)('/signin'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
AuthController = AuthController_1 = __decorate([
    (0, tsoa_1.Route)('/auth'),
    (0, tsoa_1.Tags)('Auth'),
    (0, inversify_binding_decorators_1.fluentProvide)(AuthController_1).done(),
    __param(0, (0, inversify_1.inject)(AuthService_1.AuthService)),
    __metadata("design:paramtypes", [AuthService_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map