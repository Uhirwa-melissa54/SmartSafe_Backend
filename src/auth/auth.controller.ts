import { Post,Body, Controller } from "@nestjs/common";
import { UserDto } from "src/Dto/UserDto";

@Controller("auth")
export class AuthController{
    @Post('signup')
    async signUp(@Body() user:UserDto){
        const user=

    }
}