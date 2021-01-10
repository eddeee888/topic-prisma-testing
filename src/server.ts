import { PrismaClient } from "@prisma/client";
import createServer from "./createServer";

const prisma = new PrismaClient();

const server = createServer({ prisma });

server.listen(80, () => {
  console.log(`Example app listening at http://localhost`);
});
