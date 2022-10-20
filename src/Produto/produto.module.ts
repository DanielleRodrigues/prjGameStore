import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaModule } from "src/Categoria/categoria.module";
import { CategoriaService } from "src/Categoria/Services/categoria.service";
import { ProdutoController } from "./Controllers/produto.controller";
import { Produto } from "./Entities/produto.entity";
import { ProdutoService } from "./Services/produto.service";


@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule { }