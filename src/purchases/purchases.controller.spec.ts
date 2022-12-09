import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../products/products.service';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';

class productModel {

}

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

  describe('/GET /:user/:page', () => {
    it('should return all products in users purchase history', async() => {
      purchaseModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockResolvedValueOnce([purchase])
        }))
      }));
      expect(await controller.getUserPurchaseHistory({user:"testuser", page:"1"})).toStrictEqual([purchase]);
    });
  });

  describe('/POST /:user/:product', () => {
    it('should add a product to users purchase history', async() => {
      expect((await controller.buyProduct({user:"testuser", product:"testproduct"})).data.product).toStrictEqual(purchase.product);
    });
  });
});
