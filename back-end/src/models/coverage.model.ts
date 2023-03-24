import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class CoverageModel {
  @PrimaryColumn()
  cep_true: string;
}
