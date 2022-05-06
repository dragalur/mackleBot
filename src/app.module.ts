import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { MessageModule } from './messaging/messaging.module';

@Module({
	imports: [ConfigModule, ConfigurationModule, MessageModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
