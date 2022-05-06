import { Controller, Post, Req, Res } from '@nestjs/common';
import { MessagingAdapter } from './messaging.adapter';
import { MessagingHandler } from './messaging.handler';

@Controller()
export class MessagingController {
	constructor(private messagingAdapter: MessagingAdapter, private messagingHandler: MessagingHandler) {}

	@Post('api/messages')
	async sendMessage(@Req() req, @Res() res) {
		await this.messagingAdapter.getAdapter().process(req, res, (context) => {
			return this.messagingHandler.run(context);
		});
	}
}
