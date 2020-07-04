import { Document } from 'mongoose';

export interface Dentist extends Document {
    readonly dentalSurgeryName: string,
    readonly shortDescription: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly streetAndNumber: string,
    readonly city: string,
    readonly postalCode: number,
    readonly country: number,
    readonly phoneNumber: string,
    readonly email: string,
    passwordHash: string,
    jwt: string,
}
