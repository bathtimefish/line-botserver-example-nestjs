import { Injectable } from '@nestjs/common';
import type { ILineMessagingApi, ISimpleMessage } from './messaging.interface';
import { messagingApi } from '@line/bot-sdk';
import type { ClientConfig } from '@line/bot-sdk';

const getLineBotClient = () => {
  const clientConfig: ClientConfig = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
  };
  return new messagingApi.MessagingApiClient(clientConfig);
};

@Injectable()
export class MessagingService {
  getMessage(): ISimpleMessage {
    return { message: 'This is a LINE Bot Server powered by NestJS' };
  }
  async dispachMessage(body: ILineMessagingApi): Promise<void> {
    const client = getLineBotClient();
    const event = body.events[0];
    let textMessage: { type: string; text: string };
    switch (event.message.type) {
      case 'text':
        textMessage = {
          type: 'text',
          text: event.message.text,
        };
        break;
      default:
        textMessage = {
          type: 'text',
          text: 'Server receinved an invalid message type',
        };
    }
    await client.replyMessage({
      replyToken: event.replyToken,
      messages: [textMessage],
    });
  }
}
