import { envs } from "../config/plugins/envs.plugin";
import { LogRepository } from "../domain/repository/log.repository";
import { CheckService } from "../domain/uses-cases/checks/check-service";
import { LogSeverityLevel } from "../domain/uses-cases/checks/entities/log.entity";
import { SendEmailLogs } from "../domain/uses-cases/email/send-email-logs";
import { FileDataSource } from "../infrasctructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrasctructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infrasctructure/repositories/log-repository.imple";
import { cronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";


const logRepository = new LogRepositoryImpl(
    // new FileDataSource(),
    new MongoLogDatasource(),
);

const emailService = new EmailService();

export class Server {
    public static async start() {

        console.log("Server started");

        // const logs = await logRepository.getLogs(LogSeverityLevel.low);
        // console.log(logs);
        //TODO:  Mandar Email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // )
        //     .execute(["jaiverdiaztoro@gmail.com", "andresmauriciodiaz77@gmail.com"])




        // emailService.sendEmail({
        //     to: "jaiverdiaztoro@gmail.com",
        //     subject: "hola",
        //     htmlBody: "ddd",
        //     attachements: []
        // });

        // cronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = "https://gooeegle.com";
        //         new CheckService(
        //             logRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error),
        //         ).execute(url);
        //     }
        // )


    };
};





