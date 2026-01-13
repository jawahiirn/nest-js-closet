import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../users/entities/user.entity';
import { generateSecret, generateURI, verify } from 'otplib';
import { Repository } from 'typeorm';

@Injectable()
export class OtpAuthenticationService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
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

  async enableTfaForUser(email: string, secret: string) {
    const { id } = await this.userRepository.findOneOrFail({
      where: { email },
      select: { id: true },
    });
    await this.userRepository.update(
      { id },
      // TIP: Encrypt the secret instead of saving the string itself.
      // Note: We could not hash, since original string is used for verification.
      {
        tfaSecret: secret,
        isTfaEnabled: true,
      },
    );
  }
}
