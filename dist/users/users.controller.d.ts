import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(userPassword: string, userName: string, email: string): Promise<{
        msg: string;
        userId: any;
        userName: string;
        email: string;
        realname: string;
        description: string;
    }>;
    login(req: any): any;
    getHello(req: any): string;
    logout(req: any): any;
    user(params: any): Promise<import("./users.model").User>;
    setRealName(username: string, realname: string): Promise<import("./users.model").User>;
    setDescription(username: string, description: string): Promise<import("./users.model").User>;
}
