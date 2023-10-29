# LINE Bot Server Example powered for NestJS

## Article

[LINE BotサーバーをNestJSで開発する その1](https://qiita.com/bathtimefish/items/e6c151632ad1e9ca71ed)

## How to start

```
git clone https://github.com/bathtimefish/line-botserver-example-nestjs.git
cd line-botserver-example-nestjs
npm i
touch .env
---
SSL_KEY_PATH=[YOUR SSL KEY FILE PATH]
SSL_CERT_PATH=[YOUR SSL CERT FILE PATH]
CHANNEL_ACCESS_TOKEN=[YOUR CHANNEL ACCESS TOKEN]
CHANNEL_SECRET=[YOUR CHANNEL SECRET]
---
npm run start
```