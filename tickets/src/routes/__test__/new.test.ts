import request from "supertest";
import { app } from "../../app";

it("should have route handler listening on /api/tickets from post request", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.status).not.toEqual(404);
});

it("can only be accessed if user is authenticated", async () => {
  await request(app).post("/api/tickets").send({}).expect(401);
});

it("return status other than 401 if user is authenticated", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({});

  expect(response.status).not.toEqual(401);
});

it("return error if invalid type provided", async () => {});

it("return error if invalid price provided", async () => {});

it("creates a ticket", async () => {});
