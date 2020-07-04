import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Dentist } from './dentist.interface';
import { CreateDentistDto } from './create-dentist.dto';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DentistsService {
    constructor(
        @Inject('DENTIST_MODEL')
        private dentistModel: Model<Dentist>,
    ) {}

    async create(createDentistDto: CreateDentistDto): Promise<Dentist> {
        const createdDentist = new this.dentistModel(createDentistDto);
        createdDentist.passwordHash = await AuthService.hashPassword(createDentistDto.password)
        return createdDentist.save();
    }

    async findAll(): Promise<Dentist[]> {
        return this.dentistModel.find().exec();
    }

    async findOneByEmail(email: string): Promise<Dentist> {
        return this.dentistModel.findOne({email}).exec();
    }

    async findOneById(id: string): Promise<Dentist> {
        return this.dentistModel.findById(id).exec();
    }
}
