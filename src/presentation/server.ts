
import { CheckServiceMultiple } from "../domain/uses-cases/checks/check-service.multiple";
import { FileSystemDataSource } from "../infrasctructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrasctructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrasctructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrasctructure/repositories/log-repository.imple";
import { cronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";


const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),

);

const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource(),

);

const PostgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),

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

        cronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = "https://gooeegle.com";
                new CheckServiceMultiple(
                    [fsLogRepository, PostgresLogRepository, mongoLogRepository],
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error),
                ).execute(url);
            }
        )


    };
};



