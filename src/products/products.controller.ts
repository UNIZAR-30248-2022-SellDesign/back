import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    // Home sin filtrar
    @Get('/home/page/:page')
    async homeProducts(@Param() params) {
        return await this.productsService.getHomeProducts(params.page)
    }

    // Home filtrado por precio
    @Get('/home/:min/:max')
    async homeProductsByPrice(@Param() params) {
        return await this.productsService.getHomeProductsByPrice(params.min, params.max)
    }

    // Home filtrado por tipo de producto
    @Get('/home/:type')
    async homeProductsByType(@Param() params) {
        return await this.productsService.getHomeProductsByType(params.type)
    }

    // Home filtrado por precio y tipo
    @Get('/home/:min/:max/:type')
    async homeProductsByPrice_Type(@Param() params) {
        return await this.productsService.getHomeProductsByPrice_Type(params.min, params.max, params.type)
    }

    // Busqueda de productos sin filtros
    @Get('/search/:name/:page')
    async buscarProducts(@Param() params) {
        return await this.productsService.searchProducts(params.name, params.page)
    }

    // Busqueda de productos filtrada por precio
    @Get('/search/:name/:min/:max')
    async buscarProductsPorPrecio(@Param() params) {
        return await this.productsService.searchProductsByPrice(params.name, params.min, params.max)
    }

    // Busqueda producto por ID
    @Get('/get/:id')
    async getProductByID(@Param() params) {
        return await this.productsService.getProductByID(params.id)
    }






    // Añadir un producto nuevo
    @Post()
    async addProduct(@Body() body): Promise<any> {
        return await this.productsService.addProduct(body.precio,body.design,body.image,body.tipo,body.description)
    }

}
