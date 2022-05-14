import { app } from "@shared/infra/http/app";
import request = require("supertest");

describe("Create Category Controller", async () => {
  it("Teste", async () => {
    await request(app).get("/cars/available").expect(200);
  });
});
