import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PurchasesService } from './purchases.service';

@Controller('purchases')
@ApiTags("Purchases API")
export class PurchasesController {

    constructor(private readonly purchasesService: PurchasesService) {}

    @Get('/:user/:page')
    @ApiParam({
        name: "user"
    })
    @ApiParam({
        name: "page"
    })
    @ApiOperation({ description: "Get purchase history from user with id [user]"})
    @ApiResponse({ status: 200, description: "Products from history returned correctly." })
    async getUserPurchaseHistory(@Param() params) {
        return await this.purchasesService.getUserPurchaseHistory(params.user, params.page);
    }

    @Post('/:user/:product')
    @ApiParam({
        name: "user"
      })
      @ApiParam({
        name: "product"
      })
      @ApiOperation({ description: "Put a new product with id [product] into user with id [user]'s history"})
      @ApiResponse({ status: 200, description: "New product added to history" })
    async buyProduct(@Param() params) {
        return await this.purchasesService.buyProduct(params.user,params.product)
    }
}
