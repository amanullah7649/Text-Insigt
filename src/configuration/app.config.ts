import * as dotenv from 'dotenv';
dotenv.config();

// Load environment-specific variables based on NODE_ENV
// if (process.env.NODE_ENV == 'production') {
//     dotenv.config({ path: '.env.production', override: true });
// } else {
//     dotenv.config();

// }


export interface IConfig {
    port: number;
    // mongodbURL: string;
}


export const AppConfig = (): IConfig => {
    const port = parseInt(process.env.APP_PORT);
    // const mongodbURL = process.env.MONGODB_URL;

    if (!port) throw new Error('port must be specified');
    return {
        port,
    };
};
