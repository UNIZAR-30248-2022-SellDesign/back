import { DesignsService } from './designs.service';
export declare class DesignsController {
    private readonly designsService;
    constructor(designsService: DesignsService);
    getDesign(params: any): Promise<any>;
    newDesign(name: string, image: string, id: string): Promise<any>;
}
