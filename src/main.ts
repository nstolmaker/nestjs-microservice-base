import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['https://nstolmaker.github.io', 'https://hydroponode.link'],
    },
  });

  const config = new DocumentBuilder()
    .setTitle('Nestjs Microservice example')
    .setDescription('The nestjs API description')
    .setVersion('1.0')
    .addTag('sensorData')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
