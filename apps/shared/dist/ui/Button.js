"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const tamagui_1 = require("tamagui");
// interface IButtonShared extends typeof Button{
//     // children
// }
function ButtonShared() {
    return (react_1.default.createElement(tamagui_1.Button, { size: "$3", variant: "outlined" }, "Outlined"));
}
exports.default = ButtonShared;
