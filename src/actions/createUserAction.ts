import { PrismaClient, User } from "@prisma/client";

export interface CreateUserActionParams {
  prisma: PrismaClient;
  email: string;
}

const createUserAction = async ({
  prisma,
  email,
}: CreateUserActionParams): Promise<User> => {
  return await prisma.user.create({ data: { email } });
};

export default createUserAction;
