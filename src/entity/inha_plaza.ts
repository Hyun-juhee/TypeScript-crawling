import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
@Entity()
export class inha_plaza {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true,
    })
    title: string;

    @Column({
        nullable: true,
    })
    posted_at: Date;

    @Column({
        nullable: true,
    })
    link: string;

    @CreateDateColumn({
        name: "created_at"
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at"
    })
    updatedAt: Date;
}