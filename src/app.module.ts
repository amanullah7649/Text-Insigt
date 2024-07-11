import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnalyzerModule } from './modules/analyzer/analyzer.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000,//seconds - time to live for the current request limit counter
      limit: 10,// requests per minute per IP
    }]),
    ConfigModule.forRoot(),
    AnalyzerModule,
    ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
