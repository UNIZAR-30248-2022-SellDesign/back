import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { ProductSchema } from './products.model';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { FavSchema } from './fav.model';

describe('ProductsService', () => {
  let service: ProductsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getModelToken('product'),
          useValue: ProductSchema
        },
        {
          provide: getModelToken('fav'),
          useValue: FavSchema
        }
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
