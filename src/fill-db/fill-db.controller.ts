import { Controller, Get, Param } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { FillDbService } from './fill-db.service';

@Controller('fill-db')
@ApiExcludeController()
export class FillDbController {
    constructor(private readonly fillDbService: FillDbService) {}

    /*
     * ESTE CONTROLADOR ES SOLO PARA HACER PRUEBAS, EN NINGUN MOMENTO 
     * FORMARA PARTE DE LA API DE USUARIO
     */



    // Elimina y crea un nuevo set de usuarios/productos/diseños
    @Get('/reset')
    async resetDb(): Promise<Object> {
        return await this.fillDbService.resetDb()
    }

    // Sobrecarga la base de datos con [iter] veces los productos del set en el servicio
    @Get('/overload/:iter')
    async overloadDb(@Param() params): Promise<Object> {
        return await this.fillDbService.overloadDb(params.iter)
    }
}
