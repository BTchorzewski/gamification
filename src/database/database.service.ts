
import { DataSource } from 'typeorm';
import { CONFIG } from '../../config'
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: CONFIG.db.type,
        host: CONFIG.db.host,
        port: CONFIG.db.port,
        username: CONFIG.db.username,
        password: CONFIG.db.password,
        database: CONFIG.db.database,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
