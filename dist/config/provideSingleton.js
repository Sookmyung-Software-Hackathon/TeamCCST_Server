"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provideSingleton = void 0;
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const provideSingleton = function (identifier) {
    return (0, inversify_binding_decorators_1.fluentProvide)(identifier).inSingletonScope().done();
};
exports.provideSingleton = provideSingleton;
//# sourceMappingURL=provideSingleton.js.map