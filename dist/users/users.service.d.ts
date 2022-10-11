import { Model } from 'mongoose';
import { User } from './users.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    insertUser(userName: string, password: string): Promise<User & Required<{
        _id: string;
    }>>;
    getUser(userName: string): Promise<User & Required<{
        _id: string;
    }>>;
}
