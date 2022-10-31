import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Design } from 'src/designs/designs.model';
import { User } from 'src/users/users.model';
import { Product } from '../products/products.model';


@Injectable()
export class FillDbService {

    constructor(@InjectModel('product') private readonly productModel: Model<Product>,
                @InjectModel('design') private readonly designModel: Model<Design>,
                @InjectModel('user') private readonly userModel: Model<User>) {}


    async resetDb() {
        // Borrar productos

        // Borrar diseños

        // Borrar usuarios
        await this.userModel.deleteMany({"password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG"})
        // Añadir usuarios
        await this.userModel.insertMany(users_list)
        // Añadir diseños

        // Añadir productos


       
       
    }
}


const users_list = [
    {
        "_id": '507f1f77bcf86cd799439011',
        "username": "ibon",
        "password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG",
        "email": "776561@unizar.es"
    },
    {
        "_id": '507f1f77bcf86cd799439012',
        "username": "raul",
        "password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG",
        "email": "795333@unizar.es"
    },
    {
        "_id": '507f1f77bcf86cd799439013',
        "username": "gelpa",
        "password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG",
        "email": "759406@unizar.es"
    },
    {
        "_id": '507f1f77bcf86cd799439014',
        "username": "ru",
        "password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG",
        "email": "736650@unizar.es"
    }
]

const designs_list = [
    {
        "name":"",
        "designer":"",
        "image":""
    }
]
