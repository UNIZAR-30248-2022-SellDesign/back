import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserSchema } from './users.model';
import { UsersService } from './users.service';
import { User } from './users.model';

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
  static findById = jest.fn().mockResolvedValue(user);
  static insertUser = jest.fn().mockResolvedValue(user);
}


describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getModelToken('user'),
          useValue: userModel
        }
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/POST addUser', () => {
    it('should return created user msg', async() => {
      let response = await controller.addUser("testuser","12345678","testmail@test.es");
      expect(response.msg).toBe("User successfully registered")
    });
  });

  describe('/POST login', () => {
    it('should return logged user msg', async() => {
      let response = await controller.login("testuser");
      expect(response.msg).toBe("User logged in")
    });
  });

  describe('/GET username', () => {
    it('should return a user by its username', async() => {
      expect(await controller.user("testuser")).toBe(user);
    });
  });

  describe('/GET userId', () => {
    it('should return a user by its id', async() => {
      expect(await controller.userById("12345678")).toBe(user);
    });
  });

  describe('/POST setRealName', () => {
    it('should change a users real name', async () => {
      expect(await controller.setRealName("testuser", "testrealname")).toBe(user);
    });
  });

  describe('/POST setDescription', () => {
    it('should change a users description', async () => {
      expect(await controller.setDescription("testuser", "testdescription")).toBe(user);
    });
  });

});
