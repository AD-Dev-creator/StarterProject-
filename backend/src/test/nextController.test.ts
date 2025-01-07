import app from "./../main";
import request from "supertest";

describe("NextController", () => {
  describe("POST /api/next", () => {
    it("should create a Next.js app", async () => {
      const response = await request(app)
        .post("/api/next")
        .send({ appName: "my-next-app" });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        message: "Next.js app created successfully",
      });
    });

    it("should create a Next.js app with TypeScript", async () => {
      const response = await request(app)
        .post("/api/next/typescript")
        .send({ appName: "my-next-app" });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        message: "Next.js app created successfully",
      });
    });
  });
});
