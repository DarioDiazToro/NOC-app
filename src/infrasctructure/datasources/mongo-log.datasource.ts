

import { LogModel } from '../../data/mongo';
import { LogDataSource } from "../../domain/uses-cases/checks/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/uses-cases/checks/entities/log.entity";



export class MongoLogDatasource implements LogDataSource {

    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create(log);
        // await newLog.save();
        console.log('Mongo Log created:', newLog.id);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {

        const logs = await LogModel.find({
            level: severityLevel
        });

        return logs.map(LogEntity.fromObject);
    }

}