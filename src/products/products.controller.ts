import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@Controller('products')
@ApiTags("Products API")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    // Productos que ha subido un usuario
    @Get('/user/:user/:page')
    @ApiParam({
        name: "user-id"
      })
      @ApiParam({
        name: "page"
      })
      @ApiOperation({ description: "Get [user-id] products at specific [page]"})
      @ApiResponse({ status: 200, description: "User products returned correctly." })
    async getUserDesigns(@Param() params): Promise<any> {
        return await this.productsService.getUserProducts(params.user, params.page)
    }

    // Home sin filtrar
    @Get('/home/page/:page')
    @ApiParam({
        name: "page"
      })
      @ApiOperation({ description: "Get all products at specific [page]"})
      @ApiResponse({ status: 200, description: "Home products returned correctly." })
    async homeProducts(@Param() params) {
        return await this.productsService.getHomeProducts(params.page)
    }

    // Home filtrado por precio
    @Get('/home/:min/:max')
    @ApiParam({
        name: "min"
    })
    @ApiParam({
        name: "max"
    })
    @ApiOperation({ description: "Get all products with price between [min]-[max]"})
    @ApiResponse({ status: 200, description: "Home products returned correctly." })
    async homeProductsByPrice(@Param() params) {
        return await this.productsService.getHomeProductsByPrice(params.min, params.max)
    }

    // Home filtrado por tipo de producto
    @Get('/home/:type')
    @ApiParam({
        name: "type"
    })
    @ApiOperation({ description: "Get all products filtered by [type]"})
    @ApiResponse({ status: 200, description: "Home products returned correctly." })
    async homeProductsByType(@Param() params) {
        return await this.productsService.getHomeProductsByType(params.type)
    }

    // Home filtrado por precio y tipo
    @Get('/home/:min/:max/:type')
    @ApiParam({
        name: "min"
    })
    @ApiParam({
        name: "max"
    })
    @ApiParam({
        name: "type"
    })
    @ApiOperation({ description: "Get all products with price beetwen [min]-[max]" +
                                 "and filtered by [type]"})
    @ApiResponse({ status: 200, description: "Home products returned correctly." })
    async homeProductsByPrice_Type(@Param() params) {
        return await this.productsService.getHomeProductsByPrice_Type(params.min, params.max, params.type)
    }

    // Busqueda de productos sin filtros
    @Get('/search/:name/:page')
    @ApiParam({
        name: "name"
    })
    @ApiParam({
        name: "page"
    })
    @ApiOperation({ description: "Search products filtered by [name] at specific [page]"})
    @ApiResponse({ status: 200, description: "Products returned correctly." })
    async buscarProducts(@Param() params) {
        return await this.productsService.searchProducts(params.name, params.page)
    }

    // Busqueda de productos filtrada por precio
    @Get('/search/:name/:min/:max')
    @ApiParam({
        name: "name"
    })
    @ApiParam({
        name: "min"
    })
    @ApiParam({
        name: "max"
    })
    @ApiOperation({ description: "Search products filtered by [name] " +
                                 "with price beetwen [min]-[max]"})
    @ApiResponse({ status: 200, description: "Products returned correctly." })
    async buscarProductsPorPrecio(@Param() params) {
        return await this.productsService.searchProductsByPrice(params.name, params.min, params.max)
    }

    // Busqueda producto por ID
    @Get('/get/:id')
    @ApiParam({
        name: "product-id"
    })
    @ApiOperation({ description: "Return data of product with id [product-id]"})
    @ApiResponse({ status: 200, description: "Product returned correctly." })
    async getProductByID(@Param() params) {
        return await this.productsService.getProductByID(params.id)
    }

    // Busqueda productos con diseño
    @Get('/design/:design')
    @ApiParam({
        name: "design-id"
    })
    @ApiOperation({ description: "Return all products with [design-id]"})
    @ApiResponse({ status: 200, description: "Products returned correctly." })
    async allProductDesign(@Param() params): Promise<any> { 
        return await this.productsService.getProductByDesign(params.design)
    }

    // Añadir un producto nuevo
    @Post('/new')
    @ApiParam({
        name: "price"
    })
    @ApiParam({
        name: "design"
    })
    @ApiParam({
        name: "image"
    })
    @ApiParam({
        name: "type"
    })
    @ApiParam({
        name: "description"
    })
    @ApiParam({
        name: "seller"
    })
    @ApiOperation({ description: "Create a new product with the given [Body]"})
    @ApiResponse({ status: 201, description: "Product created correctly." })
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
    @ApiParam({
        name: "price"
    })
    @ApiParam({
        name: "design"
    })
    @ApiParam({
        name: "image"
    })
    @ApiParam({
        name: "type"
    })
    @ApiParam({
        name: "description"
    })
    @ApiParam({
        name: "product-id"
    })
    @ApiOperation({ description: "Update product [product-id] with the given [Body]"})
    @ApiResponse({ status: 201, description: "Product updated correctly." })
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
    @ApiParam({
        name: "seller"
    })
    @ApiParam({
        name: "product-id"
    })
    @ApiOperation({ description: "Delete product with id [product-id] and uploaded by [seller]"})
    @ApiResponse({ status: 201, description: "Product deleted correctly." })
    async deleteProduct(@Param() params): Promise<boolean>{
        return await this.productsService.deleteProduct(params.id,params.seller)
    }

}
