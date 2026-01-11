import { Injectable } from "@nestjs/common";
import * as argon2 from "argon2"

import { UserDto } from "src/Dto/UserDto";

@Injectable()
export class AuthService{
 AuthService(){

}
    async signUp(user:UserDto) {
        const hashedPassword=argon2.hash(user.password,{
            type:argon2.argon2id
        }
            
        )
        
    }
    const createdUser=
}