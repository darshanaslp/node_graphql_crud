import { IsOptional, Length, MaxLength } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @MaxLength(30)
    name!: string;

    @Column()
    @IsOptional()
    @Length(30, 255)
    slug!: string;

    @Column()
    @IsOptional()
    @Length(30, 255)
    brand!: string;


}