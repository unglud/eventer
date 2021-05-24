import request from "supertest";
import { app } from "../../app";

it("should return 400 on sign in with not existing email", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});

it("should return 400 on invalid email", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "test",
      password: "password",
    })
    .expect(400);
});

it("should return 400 missing fields", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
    })
    .expect(400);

  await request(app)
    .post("/api/users/signin")
    .send({
      password: "password",
    })
    .expect(400);
});

it("should fail with incorrect password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "incorrect password",
    })
    .expect(400);
});

it("should sets cookie after sign in", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
