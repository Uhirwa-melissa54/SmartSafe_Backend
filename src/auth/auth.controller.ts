import { Post,Body, Controller } from "@nestjs/common";
import { SignUp } from "src/Dto/signUpDto";
import { UserDto } from "src/Dto/UserDto";

@Controller("auth")
export class AuthController{
    @Post('signup')
    async signUp(@Body() user:UserDto){
        
       

            
        }

    }
