import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavSchema } from 'src/products/fav.model';
import { ProductSchema } from 'src/products/products.model';
import { ProductsService } from 'src/products/products.service';
import { PerfilController } from './perfil.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: "product", schema: ProductSchema }]),
            MongooseModule.forFeature([{ name: "fav", schema: FavSchema }])],
  controllers: [PerfilController],
  providers: [ProductsService]
})
export class PerfilModule {}
