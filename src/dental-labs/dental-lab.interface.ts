import { Document } from 'mongoose';

export interface DentalLab extends Document {
    readonly dentalLabName: string,
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
    readonly priceLevel: number,
    readonly qualityLevel: number,
    readonly productionTimeLevel: number,
}
