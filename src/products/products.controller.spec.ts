import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { FavSchema } from './fav.model';
import { ProductsController } from './products.controller';
import { ProductSchema } from './products.model';
import { ProductsService } from './products.service';

const product = {
  _id: '12345678',
  price: 'testprice',
  design: 'testdesign',
  image: 'testimage',
  type: 'testtype',
  description: 'testdescription',
  seller: 'testseller'
}

class productModel {
  constructor (private data) {}
  save = jest.fn().mockResolvedValue(this.data);
  static findOne = jest.fn().mockResolvedValue(product);
  static find = jest.fn().mockResolvedValue([product]);
  static findOneAndUpdate = jest.fn().mockResolvedValue(product);
  static deleteOne = jest.fn().mockResolvedValue({"n": 1, "ok": 1, "deletedCount": 1});
}

class favModel {
  constructor (private data) {}
  save = jest.fn().mockResolvedValue(this.data);
  static findOne = jest.fn().mockResolvedValue(product);
  static find = jest.fn().mockResolvedValue([product]);
  static findOneAndUpdate = jest.fn().mockResolvedValue(product);
}

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
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

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/GET /user/:user/:page', () => {
    it('should return users products', async() => {
      productModel.find = jest.fn().mockImplementationOnce(() => ({
        sort: jest.fn().mockImplementationOnce(() => ({
          skip: jest.fn().mockImplementationOnce(() => ({
            limit: jest.fn().mockImplementationOnce(() => ({
              populate: jest.fn().mockResolvedValue([product])
            }))
          }))
        }))
      }));
      let response = await controller.getUserDesigns({user: "testUser", page: "1"});
      expect(response).toStrictEqual([product]);
    });
  });

  describe('/GET /home/page/:page', () => {
    it('should return home products', async() => {
      productModel.find = jest.fn().mockImplementationOnce(() => ({
        sort: jest.fn().mockImplementationOnce(() => ({
          skip: jest.fn().mockImplementationOnce(() => ({
            limit: jest.fn().mockImplementationOnce(() => ({
              populate: jest.fn().mockResolvedValue([product])
            }))
          }))
        }))
      }));
      let response = await controller.homeProducts({page: "1"});
      expect(response).toStrictEqual([product]);
    });
  });

  describe('/GET /home/:min/:max', () => {
    it('should return home products filtered by price', async() => {
      productModel.find = jest.fn().mockImplementation(() => ({
        sort: jest.fn().mockImplementationOnce(() => ({
          populate: jest.fn().mockResolvedValue([product])
        }))
      }));
      let response = await controller.homeProductsByPrice({min: "1", max: "30"});
      expect(response).toStrictEqual([product]);
    });
  });

  describe('/GET /home/:type', () => {
    it('should return home products filtered by type', async() => {
      productModel.find = jest.fn().mockImplementation(() => ({
        sort: jest.fn().mockImplementationOnce(() => ({
          populate: jest.fn().mockResolvedValue([product])
        }))
      }));
      let response = await controller.homeProductsByType({type: "1"});
      expect(response).toStrictEqual([product]);
    });
  });

  describe('/GET /home/:min/:max/:type', () => {
    it('should return home products filtered by type and price', async() => {
      let response = await controller.homeProductsByPrice_Type({type: "1", min:"1", max:"30"});
      expect(response).toStrictEqual([product]);
    });
  });

  describe('/GET /search/:name/:page', () => {
    it('should return products by name', async() => {
      productModel.find = jest.fn().mockImplementationOnce(() => ({
        sort: jest.fn().mockImplementationOnce(() => ({
          skip: jest.fn().mockImplementationOnce(() => ({
            limit: jest.fn().mockImplementationOnce(() => ({
              populate: jest.fn().mockResolvedValue([product])
            }))
          }))
        }))
      }));
      let response = await controller.buscarProducts({name: "testProduct", page:"1"});
      expect(response).toStrictEqual([product]);
    });
  });

  describe('/GET /search/:name/:min/:max', () => {
    it('should return products by name and price', async() => {
      productModel.find = jest.fn().mockImplementation(() => ({
        sort: jest.fn().mockImplementationOnce(() => ({
          populate: jest.fn().mockResolvedValue([product])
        }))
      }));
      let response = await controller.buscarProductsPorPrecio({name: "testProduct", min:"1", max:"30"});
      expect(response).toStrictEqual([product]);
    });
  });

  describe('/GET /get/:id', () => {
    it('should return product by its id', async() => {
      productModel.findOne = jest.fn().mockImplementation(() => ({
        populate: jest.fn().mockResolvedValue(product)
      }));
      let response = await controller.getProductByID({id:"12345678"});
      expect(response).toStrictEqual(product);
    });
  });

  describe('/GET /design/:design', () => {
    it('should return all products with a design', async() => {
      productModel.find = jest.fn().mockImplementation(() => ({
        populate: jest.fn().mockResolvedValue([product])
      }));
      let response = await controller.allProductDesign({design:"testDesign"});
      expect(response).toStrictEqual([product]);
    });
  });
});
