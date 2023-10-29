export class LineMessagingApiSourceDto {
  type: string;
  userId: string;
}

export class LineMessagingApiMessageDto {
  type: string;
  id: string;
  quoteToken: string;
  text: string;
}

export class LineMessagingApiDisplayContextDto {
  isRedelivery: boolean;
}

export class LineMessagingApiEventDto {
  type: string;
  message: LineMessagingApiMessageDto;
  webhookEventId: string;
  displayContext: LineMessagingApiDisplayContextDto;
  timestamp: number;
  source: LineMessagingApiSourceDto;
  replyToken: string;
  mode: string;
}

export class LineMessagingApiDto {
  distination: string;
  events: LineMessagingApiEventDto[];
}
