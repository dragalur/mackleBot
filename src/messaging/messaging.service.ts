import { Injectable } from '@nestjs/common';
import { TurnContext } from 'botbuilder';
import { messagesArray } from '../data/message';
import { MessagesTypeAdapter } from '../messagesFactory/text.adapter';
import { UserService } from '../user/user';

@Injectable()
export class MessagingService {
	constructor(private userService: UserService, private messageFactory: MessagesTypeAdapter) {}

	public processActivity = async (context: TurnContext) => {
		if (!this.userService.doesUserExist(context.activity.from.id)) {
			this.userService.create(context.activity.from.id);
		}
		await this.sendMessage(context);
	};

	private sendMessage = async (context: TurnContext) => {
		await this.handleSendingMessage(context);
	};

	private handleSendingMessage = async (context: TurnContext) => {
		let message = this.getNextMessageFromContext(context);
		while (message) {
			await this.prepareMessagesAndSend(context, message);
			message = this.getNextAtomFromMessage(message.nextAtomId);
			if (message) this.userService.setLastAtom(context.activity.from.id, message.id);
		}
	};

	private getNextMessageFromContext = (context: TurnContext) => {
		if (context.activity.text) {
			return messagesArray.find((message) => message.id == +context.activity.text);
		}
		return this.userService.getNextAtom(context.activity.from.id);
	};

	private prepareMessagesAndSend = async (context: TurnContext, message) => {
		await this.send(context, this.messageFactory.typing());
		await this.send(context, this.messageFactory.text(message));
	};

	private send = async (context: TurnContext, message) => {
		if (message?.length) {
			await context.sendActivities(message);
		} else {
			await context.sendActivity(message);
		}
	};

	private getNextAtomFromMessage = (nextAtomId) => {
		return messagesArray.find((mes) => mes.id == nextAtomId);
	};
}
