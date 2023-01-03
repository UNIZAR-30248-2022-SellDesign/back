import { FillDbService } from './fill-db.service';
export declare class FillDbController {
    private readonly fillDbService;
    constructor(fillDbService: FillDbService);
    resetDb(): Promise<Object>;
    overloadDb(params: any): Promise<Object>;
}
