import { CheckService } from "../domain/uses-cases/checks/check-service";
import { cronService } from "./cron/cron-service";



export class Server {
    public static start() {
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
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error))
                    .execute("http://google.com");
            }
        )

    };
};





