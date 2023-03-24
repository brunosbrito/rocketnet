import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClientModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column()
  plan_id?: number;
}
