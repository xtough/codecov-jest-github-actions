import { describe, it, expect } from "@jest/globals";
import { hello } from "../src/hello_world.js";

describe("test hello", () => {
  it("should return hello world", () => {
    expect(hello()).toBe("Hello world!");
  });
});