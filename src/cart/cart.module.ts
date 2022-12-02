import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartController } from './cart.controller';
import { CartSchema } from './cart.model';
import { CartService } from './cart.service';
import { ProductSchema } from '../products/products.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: "product", schema: ProductSchema }]),
  MongooseModule.forFeature([{ name: "cart", schema: CartSchema }])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
