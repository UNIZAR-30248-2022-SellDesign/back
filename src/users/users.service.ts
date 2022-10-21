import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private readonly userModel: Model<User>) {}
  async insertUser(userName: string, password: string, email: string) {
    const username = userName.toLowerCase();
    const newUser = new this.userModel({
      username,
      password,
      email,
    });
    await newUser.save();
    return newUser;
  }
  async getUser(userName: string): Promise<User>{
    const username = userName.toLowerCase();
    const user = await this.userModel.findOne({ username });
    return user;
  }
  async getUsers(userName: string): Promise<User[]> {
    const username = userName.toLowerCase();
    const users = await this.userModel.find({ userName: userName });
    return users;
  }
}