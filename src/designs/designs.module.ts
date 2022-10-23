import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesignsController } from './designs.controller';
import { DesignSchema } from './designs.model';
import { DesignsService } from './designs.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "design", schema: DesignSchema }])],
  controllers: [DesignsController],
  providers: [DesignsService]
})
export class DesignsModule {}


