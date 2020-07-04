import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { DentalLab } from './dental-lab.interface';
import { CreateDentalLabDto } from './create-dental-lab.dto';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DentalLabsService {
    constructor(
        @Inject('DENTAL-LAB_MODEL')
        private dentalLabModel: Model<DentalLab>,
    ) {}

    async create(createDentalLabDto: CreateDentalLabDto): Promise<DentalLab> {
        const createdDentalLab = new this.dentalLabModel(createDentalLabDto);
        createdDentalLab.passwordHash = await AuthService.hashPassword(createDentalLabDto.password);
        return createdDentalLab.save();
    }

    async findAll(): Promise<DentalLab[]> {
        return this.dentalLabModel.find().exec();
    }

    async findOneByEmail(email: string): Promise<DentalLab> {
        return this.dentalLabModel.findOne({email}).exec();
    }

    async findOneById(id: string): Promise<DentalLab> {
        return this.dentalLabModel.findById(id).exec();
    }
}
