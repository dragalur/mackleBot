import { Injectable } from '@nestjs/common';
import { ActivityHandler, BotHandler } from 'botbuilder';
import { MessagingService } from './messaging.service';

@Injectable()
export class MessagingHandler extends ActivityHandler {
	constructor(private messageService: MessagingService) {
		super();
		this.onMessage(this.sendMessage);
		this.onMembersAdded(this.sendMessage);
	}

	private sendMessage: BotHandler = (context) => {
		return this.messageService.processActivity(context);
	};
}
