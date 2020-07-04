import { IsInt, IsString } from 'class-validator';

export class CreateDentistDto {
    @IsString()
    readonly dentalSurgeryName: string;
    @IsString()
    readonly shortDescription: string;
    @IsString()
    readonly firstName: string;
    @IsString()
    readonly lastName: string;
    @IsString()
    readonly streetAndNumber: string;
    @IsString()
    readonly city: string;
    @IsInt()
    readonly postalCode: number;
    @IsInt()
    readonly country: number;
    @IsString()
    readonly phoneNumber: string;
    @IsString()
    readonly email: string;
    @IsString()
    readonly password: string;
    @IsString()
    readonly jwt: string;
}
