import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { DesignSchema } from './designs.model';
import { DesignsService } from './designs.service';

const design = {
  _id: '12345678',
  name: 'testname',
  designer: 'testdesigner',
  image: 'testimage',
}

class designModel {
  constructor (private data) {}
  save = jest.fn().mockResolvedValue(this.data);
  static findOne = jest.fn().mockResolvedValue(design);
  static find = jest.fn().mockImplementation(() => ({
    skip: jest.fn().mockImplementation(() => ({
      limit: jest.fn().mockResolvedValue([design])
    })
  )}));
  static skip = jest.fn(() => designModel);
  static limit = jest.fn(() => designModel);
  static findOneAndUpdate = jest.fn().mockResolvedValue(design);
  static deleteOne = jest.fn().mockResolvedValue({"n": 1, "ok": 1, "deletedCount": 1});
}

describe('DesignsService', () => {
  let service: DesignsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DesignsService,
        {
          provide: getModelToken('design'),
          useValue: designModel
        }
      ],
    }).compile();

    service = module.get<DesignsService>(DesignsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getDesign', () => {
    it('should return a design by its name', async () => {
      expect(await service.getDesign("testname")).toBe(design);
    });
  });

  describe('new design', () => {
    it('should create and return a new design', async () => {
      let res = await service.newDesign("testdesigner", "testimage","testname");
      expect (res.data.name).toBe("testname");
    });
  });

  describe('updateDesign', () => {
    it('should update a design', async () => {
      expect(await service.updateDesign("12345678", "testimage","testname")).toBe(design);
    });
  });

  describe('deleteDesign', () => {
    it('should delete a design', async () => {
      expect(await service.deleteDesign("12345678", "testdesigner")).toBe(true);
    });
  });

  describe('getUserDesigns', () => {
    it('should return every design from a user', async () => {
      designModel.find = jest.fn().mockImplementation(() => ({
        sort: jest.fn().mockImplementationOnce(() => ({
          skip: jest.fn().mockImplementationOnce(() => ({
            limit: jest.fn().mockResolvedValue([design])
          }))
        }))
      }));
      expect(await service.getUserDesigns("testdesigner", "1")).toStrictEqual([design]);
    });
  });

});
