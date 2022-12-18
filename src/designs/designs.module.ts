import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavSchema } from 'src/products/fav.model';
import { ProductSchema } from 'src/products/products.model';
import { DesignsController } from './designs.controller';
import { DesignSchema } from './designs.model';
import { DesignsService } from './designs.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "design", schema: DesignSchema }]),
            MongooseModule.forFeature([{ name: "product", schema: ProductSchema }]),
            MongooseModule.forFeature([{ name: "fav", schema: FavSchema }])],
  controllers: [DesignsController],
  providers: [DesignsService]
})
export class DesignsModule {}


