import { Collection, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Setting {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    pomodoroLength: number

}
