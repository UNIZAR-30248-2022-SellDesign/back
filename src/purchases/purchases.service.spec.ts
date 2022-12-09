import { Test, TestingModule } from '@nestjs/testing';
import { PurchasesService } from './purchases.service';
import { getModelToken } from '@nestjs/mongoose';

class purchaseModel {

}

class productModel {
  
}

describe('PurchasesService', () => {
  let service: PurchasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<PurchasesService>(PurchasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
