import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesignSchema } from 'src/designs/designs.model';
import { ProductSchema } from 'src/products/products.model';
import { UserSchema } from 'src/users/users.model';
import { FillDbController } from './fill-db.controller';
import { FillDbService } from './fill-db.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "product", schema: ProductSchema }]),
            MongooseModule.forFeature([{ name: "design", schema: DesignSchema }]),
            MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  controllers: [FillDbController],
  providers: [FillDbService]
})
export class FillDbModule {}
