import 'dotenv/config';
import { Server } from "./presentation/server";
import { MongoDataBase, logModel } from './data/mongo';
import { envs } from './config/plugins/envs.plugin';
import { PrismaClient } from '@prisma/client';




(async () => {
    await main();
})();


async function main() {

    await MongoDataBase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    // const prisma = new PrismaClient();
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: "LOW",
    //         message: "Test message",
    //         origin: "App.ts"
    //     }
    // });

    // const logs = await prisma.logModel.findMany({ where: { level: "LOW" } });
    // console.log({ logs });
    // // Server.start();
    // Crear una coleccion = tables, documento = registro
    // const newLog = await logModel.create({
    //     message: "Test message desde Mongo",
    //     origin: "App.ts",
    //     level: "low"
    // });

    // await newLog.save();
    // console.log(newLog);

};