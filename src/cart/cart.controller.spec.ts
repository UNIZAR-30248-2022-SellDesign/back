import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { PurchasesService } from '../purchases/purchases.service';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

class productModel {

}

class cartModel {

}

class purchaseModel {

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
});
