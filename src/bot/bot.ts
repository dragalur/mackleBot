import { Injectable } from '@nestjs/common';
import { botInitData } from '../data/bot';

@Injectable()
export class Bot {
	private data;

	constructor() {
		this.data = botInitData;
	}

	public get id() {
		return this.data._id;
	}

	public get azureConfigs() {
		return this.data.azureConfigs;
	}

	public get name() {
		return this.data.name;
	}
}
