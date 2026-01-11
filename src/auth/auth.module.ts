import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({})
export class AuthModule {
    imports:[PrismaModule]
}
