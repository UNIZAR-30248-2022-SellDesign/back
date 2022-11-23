import { Controller, Get } from '@nestjs/common';
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
    async resetDb(): Promise<String> {
        await this.fillDbService.resetDb()
        return "Base de datos reseteada!"
    }


}
