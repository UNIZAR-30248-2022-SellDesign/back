import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import * as session from "express-session"
import * as passport from "passport"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors();
  app.use(
    session({
      secret: "keyboard",
      resave: false,
      saveUninitialized: false,
    })
  )

  app.use(passport.initialize())
  app.use(passport.session())

  const config = new DocumentBuilder()
    .setTitle('SellDesign API')
    .setDescription('This document contains all the API calls for the SellDesign webSite')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000)
}
bootstrap()