import { CoverageModel } from 'src/models/coverage.model';
import { DataSource } from 'typeorm';

export const coverageProviders = [
  {
    provide: 'COVERAGE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CoverageModel),
    inject: ['DATA_SOURCE'],
  },
];
