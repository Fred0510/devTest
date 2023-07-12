import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { price, side, size, symbol, timestamp } = req;
    try {
        const record = await prisma.table.create({
            price:  price,
            side:   side, 
            size:   size,
            symbol: symbol,
            timeStamp: timestamp,
        });
        res.status(201).json(record)
    } catch(err) {
        res.status(400).json(err);
        console.log(`create Record Err: ${err}`);
    }

}