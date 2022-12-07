import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartController } from './cart.controller';
import { CartSchema } from './cart.model';
import { CartService } from './cart.service';
import { ProductSchema } from '../products/products.model';
import { PurchaseSchema } from 'src/purchases/purchases.model';
import { PurchasesService } from 'src/purchases/purchases.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "product", schema: ProductSchema }]),
  MongooseModule.forFeature([{ name: "cart", schema: CartSchema }]),
  MongooseModule.forFeature([{ name: "purchase", schema: PurchaseSchema }])],
  controllers: [CartController],
  providers: [CartService, PurchasesService]
})
export class CartModule {}
