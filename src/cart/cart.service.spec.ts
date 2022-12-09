import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { getModelToken } from '@nestjs/mongoose';

class cartModel {

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
});
