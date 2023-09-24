import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'
import { CONFIG } from 'config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const docConfig = new DocumentBuilder()
  .setTitle('Gamification API')
  .setDescription('The gamification API description')
  .setVersion(CONFIG.version)
  .build();
const document = SwaggerModule.createDocument(app, docConfig);
SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
