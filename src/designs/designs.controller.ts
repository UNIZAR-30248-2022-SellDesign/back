import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DesignsService } from './designs.service';

@Controller('designs')
export class DesignsController {
    constructor(private readonly designsService: DesignsService) {}


    // GET one design
    @Get(':name')
    async getDesign(@Param() params): Promise<any> {
        return await this.designsService.getDesign(params.name)
    }

    @Post('/new')
    async newDesign(
      @Body('name') name: string,
      @Body('image') image: string,
      @Body('id') id: string
    ): Promise<any> {
      return await this.designsService.newDesign(id,image,name)
    }

    @Put('/update')
    async updateDesign(
      @Body('name') name: string,
      @Body('image') image: string,
      @Body('id') id: string
    ): Promise<any> {
      return await this.designsService.updateDesign(id,image,name)
    }

    @Delete('/delete/:designer/:id')
    async deleteDesign(@Param() params): Promise<boolean> {
      return await this.designsService.deleteDesign(params.id,params.designer)
    }

    @Get('/:user/:page')
    async getUserDesigns(@Param() params): Promise<any> {
        return await this.designsService.getUserDesigns(params.user, params.page)
    }

}
