import { Controller, Get, Param } from '@nestjs/common';
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
}
