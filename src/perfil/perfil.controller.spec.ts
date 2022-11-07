import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { FavSchema } from '../products/fav.model';
import { ProductSchema } from '../products/products.model';
import { ProductsService } from '../products/products.service';
import { PerfilController } from './perfil.controller';

describe('PerfilController', () => {
  let controller: PerfilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilController],
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

    controller = module.get<PerfilController>(PerfilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
