import { Injectable } from "@nestjs/common";
import * as argon2 from "argon2"
import { JwtService } from '@nestjs/jwt';
import { UserDto } from "src/Dto/UserDto";
import { PrismaService } from "src/prisma/prisma.service";
import { SignUp } from "src/Dto/signUpDto";

@Injectable()
export class AuthService{
 constructor(private prisma:PrismaService,private jwtService:JwtService){

}
    async signUp(user:UserDto) :Promise<SignUp>{
        const hashedPassword=await argon2.hash(user.password,{
            type:argon2.argon2id
        }
            
        )
          const createdUser=await this.prisma.user.create({
            data:{
                firstName:user.firstName,
                lastName:user.lastName,
                password:hashedPassword,
                phoneNumber:user.phoneNumber

            }
        
    })
    
    if(createdUser){
        const accessToken=this.jwtService.sign(
        {sub:createdUser.id,firstName:createdUser.firstName,password:createdUser.password},
        { secret: process.env.JWT_SECRET || 'access-token', expiresIn: '15m' },

        )
    const refreshToken = this.jwtService.sign(
      { sub: createdUser.id },
      { secret: process.env.JWT_SECRET || 'refresh-secret', expiresIn: '7d' },
    );
//  res.cookie('refreshToken', refreshToken, {
//       httpOnly: true,
//       secure: true, 
//       sameSite: 'strict',
//       maxAge: 7 * 24 * 60 * 60 * 1000, 
//     });
    return {
        name:createdUser.firstName,
        token:accessToken,
        status:"201"
    }


    }
    else{
        return {
        name:"No name",
        token:"No token",
        status:"500"
        }
    }
        
    }
  
}