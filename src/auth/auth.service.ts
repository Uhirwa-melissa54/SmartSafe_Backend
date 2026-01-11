import { Injectable } from "@nestjs/common";
import * as argon2 from "argon2"

import { UserDto } from "src/Dto/UserDto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService{
 constructor(private prisma:PrismaService){

}
    async signUp(user:UserDto) {
        const hashedPassword=argon2.hash(user.password,{
            type:argon2.argon2id
        }
            
        )
          const createdUser=this.prisma.user.create({
            data:{
                firstName:user.firstName,
                lastName:user.lastName,
                password:hashedPassword,
                phoneNumber:user.phoneNumber

            }
        
    })
    return createdUser
        
    }
  
}