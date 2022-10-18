import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity({ name: "tb_produto" })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    titulo: string;

    @IsNotEmpty()
    @Column({ length: 300, nullable: false })
    descricao: string;
    //produto: Produto;
}