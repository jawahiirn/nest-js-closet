import { Module } from '@nestjs/common';
import { BcryptService } from './hashing/bcrypt.service';
import { HashingService } from './hashing/hashing.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';

@Module({
  // Hashing Service is the resolved ? then point to BcryptService
  // When Hashing service is resolved the interface Bcrypt will be pointed to.
  providers: [{ provide: HashingService, useClass: BcryptService }, AuthenticationService],
  controllers: [AuthenticationController],
})
export class IamModule {}
