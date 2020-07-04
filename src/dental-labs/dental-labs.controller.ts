import { Body, Controller, Get, Post } from '@nestjs/common';
import { DentalLabsService } from './dental-labs.service';
import { CreateDentalLabDto } from './create-dental-lab.dto';
import { DentalLab } from './dental-lab.interface';

@Controller('dental-labs')
export class DentalLabsController {
    constructor(private readonly dentalLabsService: DentalLabsService) {}

    @Post()
    async create(@Body() createDentalLabDto: CreateDentalLabDto) {
        await this.dentalLabsService.create(createDentalLabDto);
    }

    @Get()
    async findAll(): Promise<DentalLab[]> {
        return this.dentalLabsService.findAll();
    }
}
