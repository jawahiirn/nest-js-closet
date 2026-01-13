import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../users/entities/user.entity';
import { generateSecret, generateURI, verify } from 'otplib';

@Injectable()
export class OtpAuthenticationService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User) private readonly userRepository: User,
  ) {}

  async generateSecret(email: string) {
    const secret = generateSecret();
    const issuer = this.configService.getOrThrow('TFA_APP_NAME');
    const uri = generateURI({ label: email, issuer, secret });
    return {
      uri,
      secret,
    };
  }

  verify(token: string, secret: string) {
    return verify({ secret, token });
  }
}
