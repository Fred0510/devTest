import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function filterRecord(record) {

    try {
        const filterRec = await prisma.table.findMany(
            {
                where: {
                    serviceName: { in: record }
                }
            });

            return JSON.parse(JSON.stringify(filterRec));

    } catch(err) {
        console.log(`filterRecord Err: ${err}`);
    }

}