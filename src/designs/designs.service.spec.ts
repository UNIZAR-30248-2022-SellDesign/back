import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { DesignSchema } from './designs.model';
import { DesignsService } from './designs.service';

describe('DesignsService', () => {
  let service: DesignsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DesignsService,
        {
          provide: getModelToken('design'),
          useValue: DesignSchema
        }
      ],
    }).compile();

    service = module.get<DesignsService>(DesignsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
