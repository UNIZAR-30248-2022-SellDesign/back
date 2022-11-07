import { Model } from 'mongoose';
import { User } from './users.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    insertUser(userName: string, password: string, email: string): Promise<User & Required<{
        _id: string;
    }>>;
    getUserById(id: any): Promise<User & Required<{
        _id: string;
    }>>;
    getUser(userName: string): Promise<User>;
    getUsers(userName: string): Promise<User[]>;
    setRealName(userName: string, realName: string): Promise<User>;
    setDescription(userName: string, description: string): Promise<User>;
}
