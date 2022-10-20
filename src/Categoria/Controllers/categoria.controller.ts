import { HttpStatus, ParseIntPipe } from "@nestjs/common";
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { Categoria } from "../Entities/categoria.entity";
import { CategoriaService } from "../Services/categoria.service";




@Controller('/categoria')
export class categoriaController {
    constructor(private readonly categoriaService: CategoriaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll()
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(
        @Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id);
    }
    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByTipo(
        @Param('nome')
        nome: string
    ): Promise<Categoria[]> {
        return this.categoriaService.findByTipo(nome);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body()
        categoria: Categoria
    ): Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(
        @Body()
        categoria: Categoria
    ): Promise<Categoria> {
        return this.categoriaService.update(categoria);
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(
        @Param('id', ParseIntPipe)
        id: number
    ) {
        return this.categoriaService.delete(id);
    }
}