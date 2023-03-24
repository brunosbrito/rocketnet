import { PlansModel } from 'src/models/plans.model';
import { DataSource } from 'typeorm';

export const planProviders = [
  {
    provide: 'PLAN_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PlansModel),
    inject: ['DATA_SOURCE'],
  },
];
