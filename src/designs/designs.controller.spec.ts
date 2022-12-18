import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { DesignsController } from './designs.controller';
import { DesignSchema } from './designs.model';
import { DesignsService } from './designs.service';

const design = {
  _id: '12345678',
  name: 'testname',
  designer: 'testdesigner',
  image: 'testimage',
}

const product = {
  _id: '12345678',
  price: 'testprice',
  design: 'testdesign',
  image: 'testimage',
  type: 'testtype',
  description: 'testdescription',
  seller: 'testseller'
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

class productModel {
  constructor (private data) {}
  static find = jest.fn().mockImplementation(() => ({
    skip: jest.fn().mockImplementation(() => ({
      limit: jest.fn().mockResolvedValue([product])
    })
  )}));
  static deleteOne = jest.fn().mockResolvedValue({"n": 1, "ok": 1, "deletedCount": 1});
  static deleteMany = jest.fn().mockResolvedValue({"n": 1, "ok": 1, "deletedCount": 1});
}

class favModel {
  static deleteMany = jest.fn().mockResolvedValue({"n": 1, "ok": 1, "deletedCount": 1});
}

describe('DesignsController', () => {
  let controller: DesignsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesignsController],
      providers: [
        DesignsService,
        {
          provide: getModelToken('design'),
          useValue: designModel
        },
        {
          provide: getModelToken('product'),
          useValue: productModel
        },
        {
          provide: getModelToken('fav'),
          useValue: favModel
        }
      ],
    }).compile();

    controller = module.get<DesignsController>(DesignsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/GET /:name', () => {
    it('should return a design by its name', async() => {
      designModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockResolvedValue([design])
        }))
      }));
      let response = await controller.getDesign({name:"testname"});
      expect(response).toStrictEqual(design);
    });
  });

  describe('/POST /new', () => {
    it('should create a new design', async() => {
      designModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockResolvedValue([design])
        }))
      }));
      let response = await controller.newDesign("testname","testimage","12345678");
      expect(response.data.image).toStrictEqual(design.image);
    });
  });

  describe('/PUT /update', () => {
    it('should update an existing design', async() => {
      let response = await controller.updateDesign("testname","testimage","12345678");
      expect(response.image).toStrictEqual(design.image);
    });
  });

  describe('/DELETE /delete/:designer/:id', () => {
    it('should delete an existing design', async() => {
      let response = await controller.deleteDesign({id:"12345678", designer:"testdesigner"});
      expect(response).toStrictEqual(true);
    });
  });

  describe('/GET /:user/:page', () => {
    it('should return users designs', async() => {
      designModel.find = jest.fn().mockImplementation(() => ({
        sort: jest.fn().mockImplementationOnce(() => ({
          skip: jest.fn().mockImplementationOnce(() => ({
            limit: jest.fn().mockResolvedValue([design])
          }))
        }))
      }));
      let response = await controller.getUserDesigns({user:"testdesigner", page:"1"});
      expect(response).toStrictEqual([design]);
    });
  });
});
