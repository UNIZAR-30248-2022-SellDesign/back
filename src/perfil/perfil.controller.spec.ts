import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { DesignSchema } from '../designs/designs.model';
import { DesignsService } from '../designs/designs.service';
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
        DesignsService,
        {
          provide: getModelToken('product'),
          useValue: ProductSchema
        },
        {
          provide: getModelToken('fav'),
          useValue: FavSchema
        },
        {
          provide: getModelToken('design'),
          useValue: DesignSchema
        }
      ],
    }).compile();

    controller = module.get<PerfilController>(PerfilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
