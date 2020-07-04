import { Module } from '@nestjs/common';
import { DentistsController } from './dentists.controller';
import { DentistsService } from './dentists.service';
import { dentistsProviders } from './dentists.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [DentistsController],
    providers: [
        DentistsService,
        ...dentistsProviders,
    ],
    exports: [
        DentistsService
    ]
})
export class DentistsModule {}
