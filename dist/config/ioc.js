"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iocContainer = void 0;
const inversify_1 = require("inversify");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const tsoa_1 = require("tsoa");
const iocContainer = new inversify_1.Container();
exports.iocContainer = iocContainer;
(0, inversify_1.decorate)((0, inversify_1.injectable)(), tsoa_1.Controller);
iocContainer.load((0, inversify_binding_decorators_1.buildProviderModule)());
//# sourceMappingURL=ioc.js.map