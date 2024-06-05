
import nodemailer from "nodemailer"
import { envs } from "../../config/plugins/envs.plugin";



interface SendEmailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachements?: Attachment[];
};

interface Attachment {
    filename: string;
    path: string;
}

export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    constructor(

    ) { }

    async sendEmail(options: SendEmailOptions): Promise<boolean> {

        const { to, subject, htmlBody, attachements = [] } = options;

        try {

            const sendInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachements
            });
            console.log(sendInformation);
            return true;
        } catch (error) {
            console.log({ error });

            return false;
        }
    }

    async sendEmailWithFileSystemsLogs(to: string | string[]) {
        const subject = "logs del servidor";
        const htmlBody = `
        <h3>Logs del sistema -NOC </h3>
          <p> Lorem ipsum dolor sit amet, consectetur.</p>
          <p> Ver logs juntos </p>
        `;

        const attachements: Attachment[] = [
            { filename: 'logs-all.log', path: "./logs/logs-all.log" },
            { filename: 'logs-medium.log', path: "./logs/logs-medium.log" },
            { filename: 'logs-high.log', path: "./logs/logs-high.log" },

        ];

        return this.sendEmail({
            to, subject, attachements, htmlBody
        });

    }
};


