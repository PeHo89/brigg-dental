import * as mongoose from 'mongoose';

export const DentalLabSchema = new mongoose.Schema({
    dentalLabName: String,
    shortDescription: String,
    firstName: String,
    lastName: String,
    streetAndNumber: String,
    city: String,
    postalCode: Number,
    country: Number,
    phoneNumber: String,
    email: String,
    passwordHash: String,
    jwt: String,
    priceLevel: Number,
    qualityLevel: Number,
    productionTimeLevel: Number,
});
