import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DesignsService } from './designs.service';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('designs')
@ApiTags("Designs API")
export class DesignsController {
    constructor(private readonly designsService: DesignsService) {}


    // GET one design
    @Get(':name')
    @ApiParam({
      name: "name"
    })
    @ApiOperation({ description: "Get design with [name]"})
    @ApiResponse({ status: 200, description: "Design returned correctly." })
    async getDesign(@Param() params): Promise<any> {
        return await this.designsService.getDesign(params.name)
    }

    @Post('/new')
    @ApiParam({
      name: "name"
    })
    @ApiParam({
      name: "image"
    })
    @ApiParam({
      name: "user-id"
    })
    @ApiOperation({ description: "Create new design with given [Body]"})
    @ApiResponse({ status: 201, description: "Design registered correctly." })
    async newDesign(
      @Body('name') name: string,
      @Body('image') image: string,
      @Body('id') id: string
    ): Promise<any> {
      return await this.designsService.newDesign(id,image,name)
    }

    @Put('/update')
    @ApiParam({
      name: "name"
    })
    @ApiParam({
      name: "image"
    })
    @ApiParam({
      name: "design-id"
    })
    @ApiOperation({ description: "Update design [design-id] with given [Body]"})
    @ApiResponse({ status: 201, description: "Design updated correctly." })
    async updateDesign(
      @Body('name') name: string,
      @Body('image') image: string,
      @Body('id') id: string
    ): Promise<any> {
      return await this.designsService.updateDesign(id,image,name)
    }

    @Delete('/delete/:designer/:id')
    @ApiParam({
      name: "designer-id"
    })
    @ApiParam({
      name: "design-id"
    })
    @ApiOperation({ description: "Delete design [design-id] uploaded by [designer-id]"})
    @ApiResponse({ status: 200, description: "Design deleted correctly." })
    async deleteDesign(@Param() params): Promise<boolean> {
      return await this.designsService.deleteDesign(params.id,params.designer)
    }

    @Get('/:user/:page')
    @ApiParam({
      name: "user-id"
    })
    @ApiParam({
      name: "page"
    })
    @ApiOperation({ description: "Get [user-id] designs at specific [page]"})
    @ApiResponse({ status: 200, description: "User designs returned correctly." })
    async getUserDesigns(@Param() params): Promise<any> {
        return await this.designsService.getUserDesigns(params.user, params.page)
    }
}
