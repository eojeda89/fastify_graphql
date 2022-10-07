import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProjects = async (parent, args, context) => {
    const result = await prisma.Projects.findMany();
    return result;
};