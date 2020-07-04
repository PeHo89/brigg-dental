import { Module } from '@nestjs/common';
import { DentistsModule } from './dentists/dentists.module';
import { DentalLabsModule } from './dental-labs/dental-labs.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        DentistsModule,
        DentalLabsModule,
        AuthModule
    ],
})
export class AppModule {}
