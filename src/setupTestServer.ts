import { PrismaClient } from "@prisma/client";
import createServer from "./createServer";

export interface TestServerConfig {
  createNewUserUrl: string;
  prisma: PrismaClient;
}

const setupTestServer = (): TestServerConfig => {
  const prisma = new PrismaClient();

  const server = createServer({ prisma });

  const internalConfig: any = {};

  beforeAll(async (done) => {
    const instance = await server.listen({ port: 80 });
    internalConfig.server = instance;
    done();
  });

  afterAll(async (done) => {
    internalConfig.server.close();
    await prisma.$disconnect();
    done();
  });

  return {
    createNewUserUrl: "http://localhost/new-user",
    prisma,
  };
};

export default setupTestServer;
