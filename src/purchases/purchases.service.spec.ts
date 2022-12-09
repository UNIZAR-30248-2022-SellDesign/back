import { Test, TestingModule } from '@nestjs/testing';
import { PurchasesService } from './purchases.service';
import { getModelToken } from '@nestjs/mongoose';

const purchase = {
  _id: '12345678',
  user: 'testuser',
  product: 'testproduct'
}

class purchaseModel {
  constructor (private data) {}
  save = jest.fn().mockResolvedValue(this.data);
  static findOne = jest.fn().mockResolvedValue(purchase);
  static find = jest.fn().mockResolvedValue([purchase]);
  static findOneAndUpdate = jest.fn().mockResolvedValue(purchase);
  static deleteOne = jest.fn().mockResolvedValue({"n": 1, "ok": 1, "deletedCount": 1});
  static deleteMany = jest.fn().mockResolvedValue({"n": 1, "ok": 1, "deletedCount": 1});
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

  describe('get users purchase history', () => {
    it('should return all products in a users history', async () => {
      purchaseModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockResolvedValueOnce([purchase])
        }))
      }));
      expect(await service.getUserPurchaseHistory("testdesigner", "1")).toStrictEqual([purchase]);
    });
  });

  describe('add product to users history', () => {
    it('should return added product', async () => {
      let res = await service.buyProduct("testuser", "testproduct");
      expect(res.data.product).toBe(purchase.product);
    });
  });
});
