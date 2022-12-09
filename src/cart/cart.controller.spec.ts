import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { PurchasesService } from '../purchases/purchases.service';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

class productModel {

}

const purchase = {
  _id: '12345678',
  user: 'testuser',
  product: 'testproduct'
}

const cart = {
  _id: '12345678',
  user: 'testuser',
  product: 'testproduct'
}

class cartModel {
  constructor (private data) {}
  save = jest.fn().mockResolvedValue(this.data);
  static findOne = jest.fn().mockResolvedValue(cart);
  static find = jest.fn().mockResolvedValue([cart]);
  static findOneAndUpdate = jest.fn().mockResolvedValue(cart);
  static deleteOne = jest.fn().mockResolvedValue({"n": 1, "ok": 1, "deletedCount": 1});
  static deleteMany = jest.fn().mockResolvedValue({"n": 1, "ok": 1, "deletedCount": 1});
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

describe('CartController', () => {
  let controller: CartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [
        CartService,
        PurchasesService,
        {
          provide: getModelToken('cart'),
          useValue: cartModel
        },
        {
          provide: getModelToken('product'),
          useValue: productModel
        },
        {
          provide: getModelToken('purchase'),
          useValue: purchaseModel
        }
      ],
    }).compile();

    controller = module.get<CartController>(CartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/GET /:user/:page', () => {
    it('should return all products in users purchase history', async() => {
      cartModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockResolvedValueOnce([cart])
        }))
      }));
      expect(await controller.getUserCartProducts({user:"testuser", page:"1"})).toStrictEqual([cart]);
    });
  });

  describe('/POST /:user/:product', () => {
    it('should add a product to users purchase history', async() => {
      expect((await controller.addProductToCart({user:"testuser", product:"testproduct"})).data.product).toStrictEqual(cart.product);
    });
  });

  describe('/DELETE /:user/:product', () => {
    it('should remove a product from users purchase history', async() => {
      expect((await controller.removeProductFromCart({user:"testuser", product:"testproduct"}))).toBe(true);
    });
  });

  describe('/DELETE /:user', () => {
    it('should remove all products from users purchase history', async() => {
      expect((await controller.clearCart({user:"testuser"}))).toBe(true);
    });
  });

  describe('/DELETE /purchase/purchaseCart/:user', () => {
    it('should remove all products from users purchase history and add them to purchase history', async() => {
      cartModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockResolvedValueOnce([cart])
        }))
      }));
      expect((await controller.purchaseCartContent({user:"testuser"}))).toStrictEqual([cart]);
    });
  });
});
