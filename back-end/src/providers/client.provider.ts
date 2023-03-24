import { ClientModel } from 'src/models/clients.model';
import { DataSource } from 'typeorm';

export const clientProviders = [
  {
    provide: 'ClIENT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ClientModel),
    inject: ['DATA_SOURCE'],
  },
];
