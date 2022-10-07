import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addProject = async (parent, args, context) => {
    const result = await prisma.Projects.createMany({
        data: [args.input]
    });
    return result;
}