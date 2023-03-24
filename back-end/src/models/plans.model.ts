import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlansModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name?: string;

  @Column()
  description?: string;

  @Column()
  price?: string;
}
