import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { AppConfig } from './configuration/app.config';



async function bootstrap() {

  const app = await NestFactory.create(AppModule);


  app.use(helmet()); //  protect app from some well-known web vulnerabilities by setting HTTP headers appropriately.
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(cookieParser()); //An HTTP cookie is a small piece of data stored by the user's browser. Cookies were designed to be a reliable mechanism for websites to remember stateful information. When the user visits the website again, the cookie is automatically sent with the request.

  app.use(compression()); //Compression can greatly decrease the size of the response body, thereby increasing the speed of a web app.
  app.useGlobalPipes(new ValidationPipe()); //validate the correctness of any data sent into a web application
  app.enableCors(); //Cross-origin resource sharing (CORS) is a mechanism that allows resources to be requested from another domain


  const port = AppConfig().port;
  await app.listen(port);
  // await app.listen(3001);
  console.log(`Service running on port: ${port}`)

}
bootstrap();
