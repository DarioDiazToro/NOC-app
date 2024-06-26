import { CronJob } from "cron";

type cronTime = string | Date;
type onTick = () => void;

export class cronService {

    static createJob(cronTime: cronTime, onTick: onTick): CronJob {
        const job = new CronJob(cronTime, onTick);
        job.start();

        return job;
    }
};