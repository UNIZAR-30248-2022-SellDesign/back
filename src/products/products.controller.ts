import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get(':page')
    async getProducts(@Param() params) {
        return await this.productsService.getProducts(params.page)
    }

    @Get('/:busqueda/:page')
    async buscarProducts(@Param() params) {
        return await this.productsService.buscarProducts(params.busqueda, params.page)
    }

    @Post()
    async addProduct(@Body() body): Promise<any> {
        return await this.productsService.addProduct(body.precio,body.design,body.image,body.tipo,body.description)
    }

}
