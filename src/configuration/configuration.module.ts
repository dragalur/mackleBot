import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigurationService } from './configuration.service';

@Module({
	imports: [ConfigModule.forRoot()],
	providers: [ConfigService, ConfigurationService],
	exports: [ConfigService, ConfigurationService],
})
export class ConfigurationModule {}
