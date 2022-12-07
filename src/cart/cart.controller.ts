import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PurchasesService } from 'src/purchases/purchases.service';
import { CartService } from './cart.service';

@Controller('cart')
@ApiTags("Cart API")
export class CartController {
    constructor(private readonly cartsService: CartService, private readonly purchasesService: PurchasesService) {}

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
    
    @Delete('/purchase/purchaseCart/:user')
    @ApiParam({
        name: "user"
      })
      @ApiParam({
        name: "product"
      })
      @ApiOperation({ description: "Remove all products from user with id [user]'s cart and add them to their history"})
      @ApiResponse({ status: 200, description: "Products removed from cart and added to history" })
    async purchaseCartContent(@Param() params) {
        let productList = await this.cartsService.getUserCartProducts(params.user, params.page);
        for (var product of productList) {
          await this.purchasesService.buyProduct(params.user, product._id);
        }
        await this.cartsService.clearCart(params.user);
        return productList;
    }
}
