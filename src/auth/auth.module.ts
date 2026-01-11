import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';


@Module({})
export class AuthModule {
    imports:[PrismaModule]
    providers:[AuthService]
    controllers:[AuthController]
}
