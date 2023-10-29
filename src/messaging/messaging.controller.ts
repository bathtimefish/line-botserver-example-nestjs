import { Controller, Get, Post, Body } from '@nestjs/common';
import { LineMessagingApiDto } from './messaging.dto';
import { MessagingService } from './messaging.service';

@Controller('messaging')
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}
  @Get()
  getMessages() {
    return this.messagingService.getMessage();
  }
  @Post()
  postMessages(@Body() body: LineMessagingApiDto) {
    return this.messagingService.dispachMessage(body);
  }
}
