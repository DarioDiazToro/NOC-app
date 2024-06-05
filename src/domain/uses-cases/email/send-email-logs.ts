import { EmailService } from "../../../presentation/email/email.service";
import { LogRepository } from "../../repository/log.repository";
import { LogEntity, LogSeverityLevel } from "../checks/entities/log.entity";

interface SendLogEmailUseCase {
    execute: (to: string | string[]) => Promise<boolean>;
};


export class SendEmailLogs implements SendLogEmailUseCase {

    constructor(
        private readonly emailSerivice: EmailService,
        private readonly logRepository: LogRepository,
    ) { }
    async execute(to: string | string[]) {

        try {
            const sent = await this.emailSerivice.sendEmailWithFileSystemsLogs(to);
            if (!sent) {
                throw new Error("Email log was not sent");
            };

            const log = new LogEntity({
                message: `Log email sent`,
                level: LogSeverityLevel.low,
                origin: "sent-email-logs.ts",

            })
            this.logRepository.saveLog(log);
            return true;
        } catch (error) {
            console.log(error);
            const log = new LogEntity({
                message: `${error}`,
                level: LogSeverityLevel.high,
                origin: "sent-email-logs.ts",
            });
            this.logRepository.saveLog(log);
            return false;
        }
    }

}