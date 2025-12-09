import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entities";

@Entity({ name: 'tb_produtos' })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ nullable: false })
    preco: number;

    @UpdateDateColumn()
    date: Date;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, { onDelete: 'CASCADE'})
    categoria: Categoria;
}