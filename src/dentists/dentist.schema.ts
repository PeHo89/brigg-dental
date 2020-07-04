import * as mongoose from 'mongoose';

export const DentistSchema = new mongoose.Schema({
    dentalSurgeryName: String,
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
});
