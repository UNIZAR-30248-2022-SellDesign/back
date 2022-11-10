import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { ProductSchema } from './products.model';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { FavSchema } from './fav.model';

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
  static findOne = jest.fn().mockImplementation(() => ({
    populate: jest.fn().mockResolvedValue(product)
  }));
  static find = jest.fn().mockImplementation(() => ({
    populate: jest.fn().mockResolvedValue([product])
  }));
  static findOneAndUpdate = jest.fn().mockResolvedValue(product);
  static deleteOne = jest.fn().mockResolvedValue({"n": 1, "ok": 1, "deletedCount": 1});
}

class favModel {
  constructor (private data) {}
  save = jest.fn().mockResolvedValue(this.data);
  static findOne = jest.fn().mockImplementation(() => ({
    populate: jest.fn().mockResolvedValue(product)
  }));
  static find = jest.fn().mockResolvedValue([product]);
  static findOneAndUpdate = jest.fn().mockResolvedValue(product);
}

describe('ProductsService', () => {
  let service: ProductsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getProductbyId', () => {
    it('should return a product by its id', async () => {
      expect(await service.getProductByID("12345678")).toBe(product);
    });
  });

  describe('getProductByDesign', () => {
    it('should return a product by its design', async () => {
      expect(await service.getProductByDesign("testdesign")).toStrictEqual([product]);
    });
  });

  describe('getHomeProducts', () => {
    it('should return a list with products without filters', async () => {
      productModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockImplementationOnce(() => ({
            populate: jest.fn().mockResolvedValue([product])
          }))
        })
      )}));
      expect(await service.getHomeProducts(1)).toStrictEqual([product]);
    });
  });

  describe('getHomeProductsByPrice', () => {
    it('should return a list with products listed by price', async () => {
      productModel.find = jest.fn().mockImplementation(() => ({
        populate: jest.fn().mockResolvedValue([product])
      }));
      expect(await service.getHomeProductsByPrice("1","30")).toStrictEqual([product]);
    });
  });

  describe('getHomeProductsByType', () => {
    it('should return a list with products listed by type ', async () => {
      expect(await service.getHomeProductsByType("1")).toStrictEqual([product]);
    });
  });

  describe('getHomeProductsByPrice_Type', () => {
    it('should return a list with products listed by type and price ', async () => {
      expect(await service.getHomeProductsByPrice_Type("1", "30", "1")).toStrictEqual([product]);
    });
  });

  describe('getUserFavProducts', () => {
    it('should return a list with products faved by the user ', async () => {
      favModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockImplementationOnce(() => ({
            populate: jest.fn().mockResolvedValue([product])
          }))
        })
      )}));
      expect(await service.getUserFavProducts("1", "1")).toStrictEqual([product]);
    });
  });

  describe('getUserProducts', () => {
    it('should return a list with products posted by a user ', async () => {
      productModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockImplementationOnce(() => ({
            populate: jest.fn().mockResolvedValue([product])
          }))
        })
        )
      }));
      expect(await service.getUserProducts("12345678", "1")).toStrictEqual([product]);
    });
  });

  describe('searchProducts', () => {
    it('should return a list with products according to a name', async () => {
      productModel.find = jest.fn().mockImplementationOnce(() => ({
        skip: jest.fn().mockImplementationOnce(() => ({
          limit: jest.fn().mockImplementationOnce(() => ({
            populate: jest.fn().mockResolvedValue([product])
          }))
        })
      )}));
      expect(await service.searchProducts("testproduct", "1")).toStrictEqual([product]);
    });
  });

  describe('searchProductsByPrice', () => {
    it('should return a list with products according to a price and a name', async () => {
      productModel.find = jest.fn().mockImplementationOnce(() => ({
            populate: jest.fn().mockResolvedValue([product])
      }));
      expect(await service.searchProductsByPrice("testproduct", "1","30")).toStrictEqual([product]);
    });
  });

  describe('newProduct', () => {
    it('should create and return a new product ', async () => {
      let res = await service.newProduct("testprice", "testdesign", "testimage","1","testdescription","testseller");
      expect(res.data.description).toBe(product.description);
    });
  });

  describe('updateProduct', () => {
    it('should update data from an existing product ', async () => {
      productModel.findOne = jest.fn().mockResolvedValueOnce(product);
      let res = await service.updateProduct("12345678","testprice", "testdesign", "testimage","1","testdescription");
      expect(res.description).toBe(product.description);
    });
  });

  describe('deleteProduct', () => {
    it('should delete an existing product ', async () => {
      let res = await service.deleteProduct("12345678","testseller");
      expect(res).toBe(true);
    });
  });


});
