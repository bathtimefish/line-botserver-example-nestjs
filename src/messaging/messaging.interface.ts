export interface ILineMessagingApiSource {
  type: string;
  userId: string;
}

export interface ILineMessagingApiMessage {
  type: string;
  id: string;
  quoteToken: string;
  text: string;
}

export interface ILineMessagingApiDisplayContext {
  isRedelivery: boolean;
}

export interface ILineMessagingApiEvent {
  type: string;
  message: ILineMessagingApiMessage;
  webhookEventId: string;
  displayContext: ILineMessagingApiDisplayContext;
  timestamp: number;
  source: ILineMessagingApiSource;
  replyToken: string;
  mode: string;
}

export interface ILineMessagingApi {
  distination: string;
  events: ILineMessagingApiEvent[];
}

export interface ISimpleMessage {
  message: string;
}
