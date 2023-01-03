import { Model } from 'mongoose';
import { Design } from 'src/designs/designs.model';
import { Fav } from 'src/products/fav.model';
import { User } from 'src/users/users.model';
import { Product } from '../products/products.model';
export declare class FillDbService {
    private readonly productModel;
    private readonly designModel;
    private readonly userModel;
    private readonly favModel;
    constructor(productModel: Model<Product>, designModel: Model<Design>, userModel: Model<User>, favModel: Model<Fav>);
    resetDb(): Promise<{
        msg: string;
        total_users: number;
        total_designs: number;
        total_products: number;
    }>;
    overloadDb(iter: any): Promise<{
        msg: string;
        total_new_products: number;
    }>;
}
