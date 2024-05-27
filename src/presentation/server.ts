import { CheckService } from "../domain/uses-cases/checks/check-service";
import { FileDataSource } from "../infrasctructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrasctructure/repositories/log-repository.imple";
import { cronService } from "./cron/cron-service";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileDataSource()
);

export class Server {
    public static start() {


        //  Mandar Email

        console.log("Server started");

        cronService.createJob(
            '*/5 * * * * *',
            () => {
                const date = new Date();
                // console.log("every 5 second", date);
            }
        )

        cronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = "https://google.com";
                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error))
                    .execute("http://google.com");
            }
        )

    };
};





