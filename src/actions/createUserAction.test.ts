import createUserAction from "./createUserAction";
import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
afterAll(async (done) => {
  await prisma.$disconnect();
  done();
});

describe("createUserAction() - unit", () => {
  it("creates new user correctly", async () => {
    const email = `${uuidv4()}@test.com`;

    await createUserAction({ prisma, email });

    const [savedUser] = await prisma.user.findMany({
      where: { email },
      take: 1,
    });

    expect(savedUser.email).toBe(email);
  });

  it("fails if tries to create records with the same user twice", async () => {
    const email = `${uuidv4()}@test.com`;

    await createUserAction({ prisma, email });

    const [savedUser] = await prisma.user.findMany({
      where: { email },
      take: 1,
    });

    expect(savedUser.email).toBe(email);

    await expect(() => createUserAction({ prisma, email })).rejects.toThrow(
      "Unique constraint failed on the constraint: `email_unique`"
    );
  });
});
