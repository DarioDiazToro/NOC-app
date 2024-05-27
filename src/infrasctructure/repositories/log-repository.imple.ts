import { LogRepository } from "../../domain/repository/log.repository";
import { LogDataSource } from "../../domain/uses-cases/checks/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/uses-cases/checks/entities/log.entity";



export class LogRepositoryImpl implements LogRepository {


    constructor(
        private readonly logDataSource: LogDataSource,
    ) { };

    saveLog(log: LogEntity): Promise<void> {
        return this.logDataSource.saveLog(log);
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDataSource.getLogs(severityLevel);
    }

};
