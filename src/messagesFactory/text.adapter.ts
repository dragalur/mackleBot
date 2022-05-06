import { Injectable } from '@nestjs/common';
import { ActionTypes, ActivityTypes, CardAction, MessageFactory } from 'botbuilder';

@Injectable()
export class MessagesTypeAdapter {
	public text = (message) => (message.buttons ? this.generateSuggestion(message) : this.generateText(message));

	public typing = (delay = 1000) => [{ type: ActivityTypes.Typing }, { type: 'delay', value: delay }];

	private generateSuggestion = (message) => {
		const buttons: CardAction[] = message.buttons.map(({ title, nextAtomId }) => ({
			type: ActionTypes.PostBack,
			title,
			value: `${nextAtomId}`,
		}));
		return MessageFactory.suggestedActions(buttons, message.text);
	};

	private generateText = (message) => {
		return MessageFactory.text(message.text);
	};
}
