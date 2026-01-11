import { Post,Body, Controller } from "@nestjs/common";
import { SignUp } from "src/Dto/signUpDto";
import { UserDto } from "src/Dto/UserDto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController{
    constructor(private authService: AuthService) {}
    @Post('signup')
    async signUp(@Body() user:UserDto){
         
        return await this.authService.signUp(user)
        
       

            
        }

    }
