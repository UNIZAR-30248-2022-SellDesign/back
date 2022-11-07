import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

@Controller('perfil')
export class PerfilController {
    constructor(private readonly productsService: ProductsService) {}

    // GET productos que ha subido el usuario
    @Get('/:id/products/:page')
    async getUserProducts(@Param() params) {
        return await this.productsService.getUserProducts(params.id,params.page)
    }
    // GET fav productos del usuario
    @Get('/:id/fav/:page')
    async getUserFavProducts(@Param() params) {
        return await this.productsService.getUserFavProducts(params.id,params.page)
    }
}
