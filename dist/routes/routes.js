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
exports.RegisterRoutes = void 0;
const runtime_1 = require("@tsoa/runtime");
const AuthController_1 = require("./../controllers/AuthController");
const ioc_1 = require("./../config/ioc");
const models = {
    "PostBaseResponseDto": {
        "dataType": "refObject",
        "properties": {
            "status": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } }, "required": true },
        },
        "additionalProperties": true,
    },
    "UserCreateDto": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": true,
    },
    "UserLoginResponseDto": {
        "dataType": "refObject",
        "properties": {
            "status": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "nestedObjectLiteral", "nestedProperties": { "email": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true } }, "required": true },
        },
        "additionalProperties": true,
    },
    "UserLoginDto": {
        "dataType": "refObject",
        "properties": {
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": true,
    },
};
const validationService = new runtime_1.ValidationService(models);
function RegisterRoutes(app) {
    app.post('/auth/signup', ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController.prototype.createUser)), function AuthController_createUser(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                userCreateDto: { "in": "body", "name": "userCreateDto", "required": true, "ref": "UserCreateDto" },
            };
            let validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                const container = typeof ioc_1.iocContainer === 'function' ? ioc_1.iocContainer(request) : ioc_1.iocContainer;
                const controller = yield container.get(AuthController_1.AuthController);
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }
                const promise = controller.createUser.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, 201, next);
            }
            catch (err) {
                return next(err);
            }
        });
    });
    app.post('/auth/signin', ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController.prototype.loginUser)), function AuthController_loginUser(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                userLoginDto: { "in": "body", "name": "userLoginDto", "required": true, "ref": "UserLoginDto" },
            };
            let validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                const container = typeof ioc_1.iocContainer === 'function' ? ioc_1.iocContainer(request) : ioc_1.iocContainer;
                const controller = yield container.get(AuthController_1.AuthController);
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }
                const promise = controller.loginUser.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, 451, next);
            }
            catch (err) {
                return next(err);
            }
        });
    });
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode = successStatus;
            let headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            returnHandler(response, statusCode, data, headers);
        })
            .catch((error) => next(error));
    }
    function returnHandler(response, statusCode, data, headers = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    function getValidatedArgs(args, request, response) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "ignore" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new runtime_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
}
exports.RegisterRoutes = RegisterRoutes;
//# sourceMappingURL=routes.js.map