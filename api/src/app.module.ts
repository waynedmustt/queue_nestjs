import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'app_redis',
        port: 6379
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
