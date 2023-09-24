import { ApiProperty } from '@nestjs/swagger';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
        name: 'id',
        example: 'dbf19a29-a780-4e95-b54b-4b7ea9169b42',
    })
    id: string;

    @Column({length:100})
    @ApiProperty({
        name: 'name',
        example: 'John',
        title: 'A name of a user',
    })
    name: string;

    @Column()
    @ApiProperty({
        name: 'password',
        example: 'D@#D#@DCD@W',
        title: 'user\'s password',
    })
    password: string;

    @CreateDateColumn({comment: 'The date of a new user creation.'})
    createdAt: Date;
}
