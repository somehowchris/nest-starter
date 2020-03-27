import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule, HttpModule } from '@lib/nest-starter';

@Module({
  imports: [
    HealthModule.register({
      enableHttpEndpoint: true,
    }),
    HttpModule.register({
      baseURL: 'https://google.com',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
