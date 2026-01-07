import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RefreshTokenIdsStorage
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private redisClient: Redis;
  onApplicationBootstrap(): any {
    // TODO: Ideally, this should be in RedisModule
    this.redisClient = new Redis({
      host: 'localhost',
      port: 6379,
    });
  }
  onApplicationShutdown(signal?: string): any {
    return this.redisClient.quit();
  }

  async insert(userId: number, tokenId: string): Promise<void> {
    await this.redisClient.set(this.getKey(userId), tokenId);
  }
  async validate(userId: number, tokenId: string): Promise<boolean> {
    const storeId = await this.redisClient.get(this.getKey(userId));
    return storeId === tokenId;
  }
  async invalidate(userId: number): Promise<void> {
    await this.redisClient.del(this.getKey(userId));
  }
  private getKey(userId: number): string {
    return `user-${userId}`;
  }
}
