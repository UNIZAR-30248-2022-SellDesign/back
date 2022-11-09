import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    // Productos que ha subido un usuario
    @Get('/user/:user/:page')
    async getUserDesigns(@Param() params): Promise<any> {
        return await this.productsService.getUserProducts(params.user, params.page)
    }

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

    @Get('/design/:design')
    async allProductDesign(@Param() params): Promise<any> { 
        return await this.productsService.getProductByDesign(params.design)
    }

    // Añadir un producto nuevo
    @Post('/new')
    async addProduct(
        @Body('price') price: string,
        @Body('design') design: string,
        @Body('image') image: string,
        @Body('type') type: string,
        @Body('description') description: string,
        @Body('seller') seller: string
    ): Promise<any> {
        return await this.productsService.newProduct(price,design,image,type,description,seller)
    }

    // Actualizar un producto existente
    @Put('/update')
    async updateProduct(
        @Body('_id') _id: string,
        @Body('price') price: string,
        @Body('design') design: string,
        @Body('image') image: string,
        @Body('type') type: string,
        @Body('description') description: string
    ): Promise<any> {
        return await this.productsService.updateProduct(_id,price,design,image,type,description)
    }

    @Delete('/delete/:seller/:id')
    async deleteProduct(@Param() params): Promise<boolean>{
        return await this.productsService.deleteProduct(params.id,params.seller)
    }

}
