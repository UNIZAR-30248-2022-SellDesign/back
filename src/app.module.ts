import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DesignsModule } from './designs/designs.module';
import { ProductsModule } from './products/products.module';
import { FillDbModule } from './fill-db/fill-db.module';
import { PerfilModule } from './perfil/perfil.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
        "mongodb+srv://selldesign:unizar-selldesign@selldesign.v3iw4jk.mongodb.net/?retryWrites=true&w=majority"
      ),
      UsersModule,
      AuthModule,
      DesignsModule,
      ProductsModule,
      FillDbModule,
      PerfilModule,
      CartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
