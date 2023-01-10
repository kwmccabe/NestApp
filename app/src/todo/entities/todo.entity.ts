import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({ default: 0 })
    status: number;
}
