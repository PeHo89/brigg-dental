import { Injectable } from '@nestjs/common';
import { DentistsService } from '../dentists/dentists.service';
import { DentalLabsService } from '../dental-labs/dental-labs.service';
import {Dentist} from "../dentists/dentist.interface";
import {DentalLab} from "../dental-labs/dental-lab.interface";
import {JwtService} from "@nestjs/jwt";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(
        private dentistsService: DentistsService,
        private dentalLabsService: DentalLabsService,
        private jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<Dentist|DentalLab> {
        let user: Dentist|DentalLab = await this.dentistsService.findOneByEmail(email);

        if (!user) {
            user = await this.dentalLabsService.findOneByEmail(email);
        }

        if (user && user.passwordHash === await AuthService.hashPassword(password)) {
            return user;
        }
        return null;
    }

    async login(user: Dentist|DentalLab) {
        const payload = { email: user.email, id: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    static async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    static async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}
