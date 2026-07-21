"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_world_1 = require("../src/hello_world");
describe("test hello", function () {
    it("should return hello world", function () {
        expect((0, hello_world_1.hello)()).toBe("Hello world!");
    });
});
