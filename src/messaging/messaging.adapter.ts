import { Injectable } from '@nestjs/common';
import {
	CloudAdapter,
	ConfigurationServiceClientCredentialFactory,
	createBotFrameworkAuthenticationFromConfiguration,
} from 'botbuilder';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable()
export class MessagingAdapter {
	private adapter: CloudAdapter;

	constructor(private configs: ConfigurationService) {
		this.adapter = new CloudAdapter(this.getAuthConfigs());
	}

	public getAdapter = () => this.adapter;

	private getAuthConfigs = () => {
		const credentialFactory = new ConfigurationServiceClientCredentialFactory(this.configs.microsoftCredentials);
		return createBotFrameworkAuthenticationFromConfiguration(null, credentialFactory);
	};
}
