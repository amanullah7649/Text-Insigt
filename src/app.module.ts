import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnalyzerModule } from './modules/analyzer/analyzer.module';

@Module({
  imports: [ConfigModule.forRoot(), AnalyzerModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
