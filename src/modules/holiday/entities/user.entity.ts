import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Holiday } from './holiday.entity';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    name: string;

    @OneToMany(() => Holiday, (holiday) => holiday.user, {cascade: ['insert', 'update', 'remove'],

    })
    holidays: Holiday[]
}