import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Nutrizzy Swagger')
    .setDescription('This Api starts as a collage projects and here we are.')
    .setVersion('1.0')
    .addTag('users')
    .addTag('shopping')
    .addTag('post')
    .addTag('grupo')
    .addTag('ingredients')
    .addTag('recipes')
    .addTag('utensils')
    .addTag('Food Plan')
    .addTag('Daily Plan')
    .addTag('Challenges')
    .addTag('Tasks')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
