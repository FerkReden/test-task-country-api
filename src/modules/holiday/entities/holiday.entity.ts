import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('holiday')
export class Holiday {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: string;

    @Column()
    localName: string;

    @Column()
    name: string;

    @Column()
    countryCode: string;

    @ManyToOne(() => User, (user) => user.holidays)
    user: User
}