"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.useCounterStore = exports.shared = exports.add = void 0;
const add = (a, b) => {
    return a + b;
};
exports.add = add;
exports.shared = "Hallo from shared!";
var counterStore_1 = require("./stores/counterStore");
Object.defineProperty(exports, "useCounterStore", { enumerable: true, get: function () { return counterStore_1.useCounterStore; } });
var Button_1 = require("./ui/Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
