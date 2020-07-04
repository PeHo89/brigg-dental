import { Connection } from 'mongoose';
import { DentistSchema } from './dentist.schema';

export const dentistsProviders = [
    {
        provide: 'DENTIST_MODEL',
        useFactory: (connection: Connection) => connection.model('Dentist', DentistSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
