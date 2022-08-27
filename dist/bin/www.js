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
const index_1 = __importDefault(require("../index"));
const ormConfig_1 = __importDefault(require("../config/ormConfig"));
const typeorm_1 = require("typeorm");
const connectionDB = (0, typeorm_1.createConnection)(ormConfig_1.default);
connectionDB.then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("DB Connected");
})).catch((err) => {
    console.log(err);
});
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');
index_1.default.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
index_1.default.set('port', process.env.PORT || 3000);
index_1.default.listen(index_1.default.get('port'), () => {
    console.log(`Server is listening on PORT ${index_1.default.get('port')}`);
});
//# sourceMappingURL=www.js.map