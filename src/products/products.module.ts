import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavSchema } from './fav.model';
import { ProductsController } from './products.controller';
import { ProductSchema } from './products.model';
import { ProductsService } from './products.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "product", schema: ProductSchema }]),
            MongooseModule.forFeature([{ name: "fav", schema: FavSchema }])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
