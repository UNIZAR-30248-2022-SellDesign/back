"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FillDbService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FillDbService = class FillDbService {
    constructor(productModel, designModel, userModel) {
        this.productModel = productModel;
        this.designModel = designModel;
        this.userModel = userModel;
    }
    async resetDb() {
        await this.productModel.deleteMany();
        await this.designModel.deleteMany();
        await this.userModel.deleteMany({ "password": "$2b$10$2jX44YDU7MBeVXpxaZ8eP.iCLXa2USKZ0tDrIuDgkfOGd7a.ZDqJG" });
        await this.userModel.insertMany(users_list);
        await this.designModel.insertMany(designs_list);
        await this.productModel.insertMany(products_list);
    }
    async overloadDb() {
    }
};
FillDbService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('product')),
    __param(1, (0, mongoose_1.InjectModel)('design')),
    __param(2, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], FillDbService);
exports.FillDbService = FillDbService;
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
];
const designs_list = [
    {
        "_id": "6361583a43ea6378795366fb",
        "name": "Coffee Is Always Good Idea",
        "designer": "507f1f77bcf86cd799439014",
        "image": "https://img.freepik.com/vector-premium/vector-diseno-svg-citas-cafe_22345-1173.jpg?w=2000"
    },
    {
        "_id": "6361583a43ea6378795366fc",
        "name": "A cat",
        "designer": "507f1f77bcf86cd799439014",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmMp0ZoD0vgQaDwvZv53zbx-kxXTW1RBN4g&usqp=CAU"
    },
    {
        "_id": "6361583a43ea6378795366fd",
        "name": "Feather & birds",
        "designer": "507f1f77bcf86cd799439013",
        "image": "https://images.vexels.com/media/users/3/198343/isolated/preview/a85c02d85199f129decb8138a9906eb5-pluma-al-reves-con-pajaros-negros.png"
    },
    {
        "_id": "6361583a43ea6378795366fe",
        "name": "Android",
        "designer": "507f1f77bcf86cd799439013",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRutBwB7ZwSHMfKNjmpqf6j-Q1-UugBv4rA&usqp=CAU"
    },
    {
        "_id": "6361583a43ea6378795366ff",
        "name": "Mostache",
        "designer": "507f1f77bcf86cd799439012",
        "image": "https://i.pinimg.com/736x/9b/c5/bf/9bc5bf90f8bc6b84827644c3dcd80164.jpg"
    },
    {
        "_id": "6361583a43ea637879536700",
        "name": "Arrows",
        "designer": "507f1f77bcf86cd799439012",
        "image": "https://w7.pngwing.com/pngs/508/973/png-transparent-computer-icons-icon-design-forward-button-angle-symbol-svg.png"
    },
    {
        "_id": "6361583a43ea637879536701",
        "name": "The Sun",
        "designer": "507f1f77bcf86cd799439011",
        "image": "https://svgsilh.com/svg/306569.svg"
    },
    {
        "_id": "6361583a43ea637879536702",
        "name": "Hello World",
        "designer": "507f1f77bcf86cd799439011",
        "image": "https://png.pngtree.com/png-vector/20210110/ourlarge/pngtree-hello-world-svg-design-png-image_2719857.jpg"
    }
];
const products_list = [
    {
        "search_name": "Pantalon Hello World",
        "price": "18",
        "design": "6361583a43ea637879536702",
        "image": "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F8e%2F1a%2F8e1afc93481dd9c6545ef252ddf09bd42b56b794.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        "type": "Pantalon",
        "description": "Pantalon blanco de deporte",
        "seller": "507f1f77bcf86cd799439011"
    },
    {
        "search_name": "Sudadera Hello World",
        "price": "33",
        "design": "6361583a43ea637879536702",
        "image": "https://www.articulopublicitario.com/wp-content/uploads/2022/02/SU1087_31_2_1.jpg",
        "type": "Sudadera",
        "description": "Sudadera naranja",
        "seller": "507f1f77bcf86cd799439011"
    },
    {
        "search_name": "Pantalon The Sun",
        "price": "20",
        "design": "6361583a43ea637879536701",
        "image": "https://www.universo-mini.com/server/Portal_0012272/img/products/pansmart-negro-chh_6376236_xxl.jpg",
        "type": "Pantalon",
        "description": "Pantalon negro de deporte",
        "seller": "507f1f77bcf86cd799439011"
    },
    {
        "search_name": "Sudadera The Sun",
        "price": "32",
        "design": "6361583a43ea637879536701",
        "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F95%2F62%2F9562ea351b202e8d12ae36070abca865aba2ba0f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "type": "Sudadera",
        "description": "Sudadera azul",
        "seller": "507f1f77bcf86cd799439011"
    },
    {
        "search_name": "Sudadera Arrows",
        "price": "25",
        "design": "6361583a43ea637879536700",
        "image": "https://img01.ztat.net/article/spp-media-p1/eb8c0ef53fb5410f9ad24f4c23ca0d82/e4e1312fbe81499e906b722183015598.jpg?imwidth=1800&filter=packshot",
        "type": "Sudadera",
        "description": "Sudadera rosa",
        "seller": "507f1f77bcf86cd799439012"
    },
    {
        "search_name": "Sudadera Arrows",
        "price": "40",
        "design": "6361583a43ea637879536700",
        "image": "https://img01.ztat.net/article/spp-media-p1/da13d409f917426a878ebee15d1e697c/0ea87b0d53cc4aada7cfd29b636bc76c.jpg?imwidth=1800&filter=packshot",
        "type": "Sudadera",
        "description": "Sudadera granate",
        "seller": "507f1f77bcf86cd799439012"
    },
    {
        "search_name": "Sudadera Mostache",
        "price": "35",
        "design": "6361583a43ea6378795366ff",
        "image": "https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/2/3/2375K-99X-050-1-466175_13.jpg",
        "type": "Sudadera",
        "description": "Sudadera negra",
        "seller": "507f1f77bcf86cd799439012"
    },
    {
        "search_name": "Camiseta Mostache",
        "price": "17",
        "design": "6361583a43ea6378795366ff",
        "image": "https://img.freepik.com/vector-premium/diseno-maqueta-camiseta-negra-blanco_92086-468.jpg",
        "type": "Camiseta",
        "description": "Camiseta negra",
        "seller": "507f1f77bcf86cd799439012"
    },
    {
        "search_name": "Camiseta Android",
        "price": "20",
        "design": "6361583a43ea6378795366fe",
        "image": "https://koaladoompur.com/97-large_default/camiseta-basica-personalizada.jpg",
        "type": "Camiseta",
        "description": "Camiseta blanca",
        "seller": "507f1f77bcf86cd799439013"
    },
    {
        "search_name": "Camiseta Android",
        "price": "25",
        "design": "6361583a43ea6378795366fe",
        "image": "https://st3.depositphotos.com/1226172/19368/i/450/depositphotos_193689568-stock-photo-navy-blue-plain-shortsleeve-cotton.jpg",
        "type": "Camiseta",
        "description": "Camiseta azul",
        "seller": "507f1f77bcf86cd799439013"
    },
    {
        "search_name": "Camiseta Feather & birds",
        "price": "22",
        "design": "6361583a43ea6378795366fd",
        "image": "https://camisetaspersonalizadas.tienda/wp-content/uploads/2017/06/Bg_VerdeK.jpg",
        "type": "Camiseta",
        "description": "Camiseta verde",
        "seller": "507f1f77bcf86cd799439013"
    },
    {
        "search_name": "Camiseta Feather & birds",
        "price": "15",
        "design": "6361583a43ea6378795366fd",
        "image": "https://camisetastheorigen.com/5462-large_default/camiseta-personalizada-hombre-color-amarillo.jpg",
        "type": "Camiseta",
        "description": "Camiseta amarilla",
        "seller": "507f1f77bcf86cd799439013"
    },
    {
        "search_name": "Camiseta A cat",
        "price": "12",
        "design": "6361583a43ea6378795366fc",
        "image": "https://www.childrensalonoutlet.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/m/a/mayoral-boys-red-cotton-t-shirt-371887-5afbd836f80139d0fee6d1e4f9438d4a7d3c95fc.jpg",
        "type": "Camiseta",
        "description": "Camiseta roja",
        "seller": "507f1f77bcf86cd799439014"
    },
    {
        "search_name": "Pantalon A cat",
        "price": "15",
        "design": "6361583a43ea6378795366fc",
        "image": "https://contents.mediadecathlon.com/p1604441/k$b1cbc8c6ec1a075a4a20da601c7d6563/sq/250x250/Pantalon-corto-de-futbol-adulto-F100-blanco.jpg",
        "type": "Pantalon",
        "description": "Pantalon blanco corto de deporte",
        "seller": "507f1f77bcf86cd799439014"
    },
    {
        "search_name": "Camiseta Coffee Is Always Good Idea",
        "price": "15",
        "design": "6361583a43ea6378795366fb",
        "image": "https://www.camisetasserigrafia.es/wp-content/uploads/2014/05/pantalon-deporte-azul.jpg",
        "type": "Pantalon",
        "description": "Pantalon azul corto de deporte",
        "seller": "507f1f77bcf86cd799439014"
    },
    {
        "search_name": "Pantalon Coffee Is Always Good Idea",
        "price": "15",
        "design": "6361583a43ea6378795366fb",
        "image": "https://uniformescolegioelbercial.com/1282-large_default_2x/reserva-pantalon-corto-deporte-de-punto-marino.jpg",
        "type": "Pantalon",
        "description": "Pantalon corto negro de deporte",
        "seller": "507f1f77bcf86cd799439014"
    }
];
//# sourceMappingURL=fill-db.service.js.map