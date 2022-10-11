import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
        "mongodb+srv://selldesign:unizar-selldesign@selldesign.v3iw4jk.mongodb.net/?retryWrites=true&w=majority"
      ),
      UsersModule,
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
