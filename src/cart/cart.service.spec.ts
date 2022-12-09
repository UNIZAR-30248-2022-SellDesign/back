import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { getModelToken } from '@nestjs/mongoose';

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

class productModel {
  
}

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: getModelToken('cart'),
          useValue: cartModel
        },
        {
          provide: getModelToken('product'),
          useValue: productModel
        }
      ],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('get products in cart', () => {
    it('should return all products in a users cart', async () => {
      cartModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockResolvedValueOnce([cart])
        }))
      }));
      expect(await service.getUserCartProducts("testdesigner", "1")).toStrictEqual([cart]);
    });
  });

  describe('add product to cart', () => {
    it('should return added cart product', async () => {
      let res = await service.addProductToCart("testuser", "testproduct");
      expect(res.data.product).toBe(cart.product);
    });
  });

  describe('remove product from cart', () => {
    it('should return true if anything was removed', async () => {
      let res = await service.removeProductFromCart("testuser", "testproduct");
      expect(res).toBe(true);
    });
  });

  describe('clear cart', () => {
    it('should return true if anything was removed', async () => {
      let res = await service.clearCart("testuser");
      expect(res).toBe(true);
    });
  });


});
