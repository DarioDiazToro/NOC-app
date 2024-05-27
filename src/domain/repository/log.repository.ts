
import { LogEntity, LogSeverityLevel } from "../uses-cases/checks/entities/log.entity";


export abstract class LogRepository {

    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
};