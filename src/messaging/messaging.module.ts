import { Module } from '@nestjs/common';
import { ConfigurationModule } from '../configuration/configuration.module';
import { MessagesTypeAdapter } from '../messagesFactory/text.adapter';
import { UserService } from '../user/user';
import { MessagingAdapter } from './messaging.adapter';
import { MessagingController } from './messaging.controller';
import { MessagingHandler } from './messaging.handler';
import { MessagingService } from './messaging.service';

@Module({
	imports: [ConfigurationModule],
	controllers: [MessagingController],
	providers: [MessagingAdapter, MessagingHandler, MessagingService, UserService, MessagesTypeAdapter],
})
export class MessageModule {}
