import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/products/products.model';
import { PurchasesController } from './purchases.controller';
import { PurchaseSchema } from './purchases.model';
import { PurchasesService } from './purchases.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "product", schema: ProductSchema }]),
  MongooseModule.forFeature([{ name: "purchase", schema: PurchaseSchema }])],
  controllers: [PurchasesController],
  providers: [PurchasesService]
})
export class PurchasesModule {}
