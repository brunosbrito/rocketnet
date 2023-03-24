import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'root',
        password: 'password',
        database: 'Rocketnet',
        entities: [__dirname + '/../**/*.model{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
