"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
var greeting = 'world';
function hello(world) {
    if (world === void 0) { world = greeting; }
    return "Hello ".concat(world, "!");
}
