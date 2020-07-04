import { Connection } from 'mongoose';
import { DentalLabSchema } from './dental-lab.schema';

export const dentalLabsProviders = [
    {
        provide: 'DENTAL-LAB_MODEL',
        useFactory: (connection: Connection) => connection.model('DentalLab', DentalLabSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
