import { Controller, Get, Param, Query } from '@nestjs/common';
import { DesignsService } from './designs.service';

@Controller('designs')
export class DesignsController {
    constructor(private readonly designsService: DesignsService) {}


    // GET one design
    @Get(':name')
    async getDesign(@Param() params): Promise<any> {
        return await this.designsService.getDesign(params.name)
    }

    @Get()
    findAll(): string {
      return 'This action returns all cats';
    }

}
