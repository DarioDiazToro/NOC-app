import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/uses-cases/checks/check-service";
import { FileDataSource } from "../infrasctructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrasctructure/repositories/log-repository.imple";
import { cronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileDataSource()
);

export class Server {
    public static async start() {

        console.log("Server started");

        // TODO:  Mandar Email
        const emailService = new EmailService(fileSystemLogRepository);

        emailService.sendEmailWithFileSystemsLogs(
            ["jaiverdiaztoro@gmail.com",]
        );


        // emailService.sendEmail({
        //     to: "jaiverdiaztoro@gmail.com",
        //     subject: "hola",
        //     htmlBody: "ddd",
        //     attachements: []
        // });

        // cronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const date = new Date();
        //         // console.log("every 5 second", date);
        //     }
        // )

        // cronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = "https://google.com";
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${ url } is ok`),
        //             (error) => console.log(error))
        //             .execute("http://google.com");
        //     }
        // )

    };
};





