import { Module } from '@nestjs/common';
import {AuthService} from "./auth.service";
import {DentistsModule} from "../dentists/dentists.module";
import {DentalLabsModule} from "../dental-labs/dental-labs.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {AuthController} from "./auth.controller";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [
        DentistsModule,
        DentalLabsModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    exports : [
        AuthService
    ]

})
export class AuthModule {}
