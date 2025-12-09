import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
    
}