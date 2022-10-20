import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './Categoria/categoria.module';
import { Categoria } from './Categoria/Entities/categoria.entity';
import { CategoriaService } from './Categoria/Services/categoria.service';
import { Produto } from "./Produto/Entities/produto.entity";
import { ProdutoModule } from "./produto/produto.module";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:3306,
      username:'root',
      password:'root',
      database:'db_gamestore',
      entities:[Produto, Categoria],
      synchronize:true,
    }),
    ProdutoModule,
    CategoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
