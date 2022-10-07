import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const deleteProject = async (parent, args, context) => {
    const result = await prisma.Projects.delete({
        where: {
            id: args.id,
        },
    });
    return result;
}