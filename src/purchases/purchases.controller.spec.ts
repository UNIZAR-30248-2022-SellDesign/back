import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../products/products.service';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';

class productModel {

}

class purchaseModel {

}

describe('PurchasesController', () => {
  let controller: PurchasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchasesController],
      providers: [
        PurchasesService,
        {
          provide: getModelToken('purchase'),
          useValue: purchaseModel
        },
        {
          provide: getModelToken('product'),
          useValue: productModel
        }
      ],
    }).compile();

    controller = module.get<PurchasesController>(PurchasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
