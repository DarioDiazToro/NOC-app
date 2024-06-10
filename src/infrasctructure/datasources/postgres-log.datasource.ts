import { PrismaClient, SeverityLevel } from "@prisma/client";
import { LogDataSource } from "../../domain/uses-cases/checks/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/uses-cases/checks/entities/log.entity";


const prismaClient = new PrismaClient();

const severityEnum = {
    low: SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high: SeverityLevel.HIGH,
};
export class PostgresLogDatasource implements LogDataSource {

    async saveLog(log: LogEntity): Promise<void> {

        const level = severityEnum[log.level];

        const newLog = await prismaClient.logModel.create({
            data: {
                ...log,
                level
            }
        });
        console.log("postgreSQL created", newLog.id);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {

        const level = severityEnum[severityLevel];

        const logs = await prismaClient.logModel.findMany({
            where: {
                level
            }
        });

        return logs.map(postgreLog => LogEntity.fromObject(postgreLog));
    }
};

