import { Body, Controller, Get, Post } from '@nestjs/common';
import { DentistsService } from './dentists.service';
import { CreateDentistDto } from './create-dentist.dto';
import { Dentist } from './dentist.interface';

@Controller('dentists')
export class DentistsController {
    constructor(private readonly dentistsService: DentistsService) {}

    @Post()
    async create(@Body() createDentistDto: CreateDentistDto) {
        await this.dentistsService.create(createDentistDto);
    }

    @Get()
    async findAll(): Promise<Dentist[]> {
        return this.dentistsService.findAll();
    }
}
