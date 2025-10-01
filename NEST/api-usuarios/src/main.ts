import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar el mecanismo de validacion de forma global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // eliminar propiedades que no esten en el DTO
      forbidNonWhitelisted: true, // si vienen propiedades que no esten en el DTO, lanza un error
      transform: true, // transforma los tipos de datos segun el DTO
    })
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
