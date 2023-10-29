import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { config } from 'dotenv';

function getOptions() {
  return {
    httpsOptions: {
      key: fs.readFileSync(process.env.SSL_KEY_PATH),
      cert: fs.readFileSync(process.env.SSL_CERT_PATH),
    },
  };
}

async function bootstrap() {
  let options = {};
  if (process.env.SSL_KEY_PATH && process.env.SSL_CERT_PATH) {
    options = getOptions();
  }
  const app = await NestFactory.create(AppModule, options);
  await app.listen(3000);
}
config();
bootstrap();
