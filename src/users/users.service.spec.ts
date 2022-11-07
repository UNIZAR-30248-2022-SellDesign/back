import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserSchema } from './users.model';
import { UsersService } from './users.service';

const user = {
  _id: '12345678',
  username: 'testuser',
  password: 'testpassword',
  email: 'testmail@test.es',
  realname: 'testrealname',
  description: 'testdescription'
}

class userModel {
  constructor (private data) {}
  save = jest.fn().mockResolvedValue(this.data);
  static findOne = jest.fn().mockResolvedValue(user);
  static find = jest.fn().mockResolvedValue([user]);
  static findOneAndUpdate = jest.fn().mockResolvedValue(user);
}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken('user'),
          useValue: userModel
        }
      ]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('insertUser', () => {
    it('should create user', async () => {
      const newUser = await service.insertUser("testuser","testpassword","testmail@unizar.es");
      expect(newUser).toBeDefined();
    });
  });

  describe('getUser', () => {
    it('should return the previously created user', async () => {
      const newUser = await service.insertUser("testuser","testpassword","testmail@unizar.es");
      const result = await service.getUser(newUser.username);
      expect(result.username).toBe("testuser");
    });
  });

  describe('getUsers', () => {
    it('should return an array of previously created users', async () => {
      const newUser1 = await service.insertUser("testuser1","testpassword","testmail@unizar.es");
      const result = await service.getUsers("testuser");
      expect(result[0].username).toBe("testuser");
    });
  });

  describe('setRealName', () => {
    it('should change user real name', async () => {
      const newUser1 = await service.insertUser("testuser","testpassword","testmail@test.es");
      const result = await service.setRealName("testuser", "testrealname");
      expect(result.realname).toBe("testrealname");
    });
  });

  describe('setDescription', () => {
    it('should change user description', async () => {
      const newUser1 = await service.insertUser("testuser","testpassword","testmail@test.es");
      const result = await service.setDescription("testuser", "testdescription");
      expect(result.description).toBe("testdescription");
    });
  });

 

});
