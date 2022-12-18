import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesignSchema } from 'src/designs/designs.model';
import { DesignsService } from 'src/designs/designs.service';
import { FavSchema } from './fav.model';
import { ProductsController } from './products.controller';
import { ProductSchema } from './products.model';
import { ProductsService } from './products.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "product", schema: ProductSchema }]),
            MongooseModule.forFeature([{ name: "fav", schema: FavSchema }]),
            MongooseModule.forFeature([{ name: "design", schema: DesignSchema }])],
  controllers: [ProductsController],
  providers: [ProductsService,
              DesignsService]
})
export class ProductsModule {}
