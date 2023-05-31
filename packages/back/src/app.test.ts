import request from "supertest";

import { app } from "./app";

describe("app", () => {
  it("GET /", async () => {
    expect.assertions(2);

    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Welcome to Adaptarte's API");
  });
});
