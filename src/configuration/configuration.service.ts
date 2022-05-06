import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { microsoftCredentials } from './configuration.constants';

@Injectable()
export class ConfigurationService {
	constructor(private configs: ConfigService) {}

	public get microsoftCredentials() {
		return {
			MicrosoftAppId: this.configs.get(microsoftCredentials.appId),
			MicrosoftAppPassword: this.configs.get(microsoftCredentials.appPassword),
			MicrosoftAppType: this.configs.get(microsoftCredentials.appType),
			MicrosoftAppTenantId: this.configs.get(microsoftCredentials.appTenantId),
		};
	}
}
