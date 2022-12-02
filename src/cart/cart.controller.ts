import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';

@Controller('cart')
@ApiTags("Cart API")
export class CartController {
    constructor(private readonly cartsService: CartService) {}

    // Busqueda de productos sin filtros
    @Get('/:user/:page')
    @ApiParam({
        name: "user"
    })
    @ApiParam({
        name: "page"
    })
    @ApiOperation({ description: "Get cart from user with id [user]"})
    @ApiResponse({ status: 200, description: "Products from cart returned correctly." })
    async getUserCartProducts(@Param() params) {
        return await this.cartsService.getUserCartProducts(params.user, params.page);
    }

    @Post('/:user/:product')
    @ApiParam({
        name: "user"
      })
      @ApiParam({
        name: "product"
      })
      @ApiOperation({ description: "Put a new product with id [product] into user with id [user]'s cart"})
      @ApiResponse({ status: 200, description: "New product added to cart" })
    async addProductToCart(@Param() params) {
        return await this.cartsService.addProductToCart(params.user,params.product)
    }

    @Delete('/:user/:product')
    @ApiParam({
        name: "user"
      })
      @ApiParam({
        name: "product"
      })
      @ApiOperation({ description: "Delete product with id [product] from user with id [user]'s cart"})
      @ApiResponse({ status: 200, description: "Product removed from cart" })
    async removeProductFromCart(@Param() params) {
        return await this.cartsService.removeProductFromCart(params.user,params.product)
    }

    @Delete('/:user')
    @ApiParam({
        name: "user"
      })
      @ApiOperation({ description: "Clear all products from user with id [user]'s cart"})
      @ApiResponse({ status: 200, description: "Products removed from cart" })
    async clearCart(@Param() params) {
        return await this.cartsService.clearCart(params.user)
    }
}
