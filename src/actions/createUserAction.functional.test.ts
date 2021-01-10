import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";
import setupTestServer from "../setupTestServer";

const { createNewUserUrl, prisma } = setupTestServer();

describe("createUserAction() - functional", () => {
  it("creates new user correctly", async () => {
    const email = `${uuidv4()}@test.com`;

    const res = await fetch(`${createNewUserUrl}/${email}`);

    expect(res.ok).toBe(true);
  });

  it("fails if tries to create records with the same user twice", async () => {
    const email = `${uuidv4()}@test.com`;

    await prisma.user.create({ data: { email } });

    const res = await fetch(`${createNewUserUrl}/${email}`);

    expect(res.ok).toBe(false);
  });
});
