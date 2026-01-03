import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('sign-up')
  signUp(@Body() payload: SignUpDto) {
    return this.authenticationService.signUp(payload);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(@Body() payload: SignInDto) {
    return this.authenticationService.signIn(payload);
  }
}
