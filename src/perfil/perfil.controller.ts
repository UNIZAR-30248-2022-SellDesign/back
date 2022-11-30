import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from '../products/products.service';

@Controller('perfil')
@ApiTags("Perfil API")
export class PerfilController {
    constructor(private readonly productsService: ProductsService) {}

    // GET productos que ha subido el usuario
    @Get('/:id/products/:page')
    @ApiParam({
        name: "user-id"
      })
      @ApiParam({
        name: "page"
      })
      @ApiOperation({ description: "Get [user-id] products at specific [page]"})
      @ApiResponse({ status: 200, description: "User products returned correctly." })
    async getUserProducts(@Param() params) {
        return await this.productsService.getUserProducts(params.id,params.page)
    }
    // GET fav productos del usuario
    @Get('/:id/fav/:page')
    @ApiParam({
        name: "user-id"
      })
      @ApiParam({
        name: "page"
      })
      @ApiOperation({ description: "Get [user-id] fav products at specific [page]"})
      @ApiResponse({ status: 200, description: "User fav products returned correctly." })
    async getUserFavProducts(@Param() params) {
        return await this.productsService.getUserFavProducts(params.id,params.page)
    }
    @Get('/fav/:id/:product')
    @ApiParam({
        name: "user-id"
      })
      @ApiParam({
        name: "product-id"
      })
      @ApiOperation({ description: "Get [user-id] fav products at specific [page]"})
      @ApiResponse({ status: 200, description: "User fav products returned correctly." })
    async getIfUserFavProduct(@Param() params) {
        return await this.productsService.getIfUserFavProduct(params.id,params.product)
    }

    @Post('/fav/:id/:product')
    @ApiParam({
        name: "user-id"
      })
      @ApiParam({
        name: "product-id"
      })
      @ApiOperation({ description: "Get [user-id] fav products at specific [page]"})
      @ApiResponse({ status: 200, description: "User fav products returned correctly." })
    async postUserFavProduct(@Param() params) {
        return await this.productsService.postIfUserFavProduct(params.id,params.product)
    }

    @Delete('/fav/:id/:product')
    @ApiParam({
        name: "user-id"
      })
      @ApiParam({
        name: "product-id"
      })
      @ApiOperation({ description: "Get [user-id] fav products at specific [page]"})
      @ApiResponse({ status: 200, description: "User fav products returned correctly." })
    async deleteUserFavProduct(@Param() params) {
        return await this.productsService.deleteIfUserFavProduct(params.id,params.product)
    }
}
