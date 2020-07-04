import { Module } from '@nestjs/common';
import { DentalLabsController } from './dental-labs.controller';
import { DentalLabsService } from './dental-labs.service';
import { dentalLabsProviders } from './dental-labs.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [DentalLabsController],
    providers: [
        DentalLabsService,
        ...dentalLabsProviders,
    ],
    exports: [
        DentalLabsService
    ]
})
export class DentalLabsModule {}
