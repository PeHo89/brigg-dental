import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import {Dentist} from "../dentists/dentist.interface";
import {DentalLab} from "../dental-labs/dental-lab.interface";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(email: string, password: string): Promise<any> {
        const user: Dentist|DentalLab = await this.authService.validateUser(email, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
