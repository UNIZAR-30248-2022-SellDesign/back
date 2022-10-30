import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { DesignsController } from './designs.controller';
import { DesignSchema } from './designs.model';
import { DesignsService } from './designs.service';

describe('DesignsController', () => {
  let controller: DesignsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesignsController],
      providers: [
        DesignsService,
        {
          provide: getModelToken('design'),
          useValue: DesignSchema
        }
      ],
    }).compile();

    controller = module.get<DesignsController>(DesignsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
