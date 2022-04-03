import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const dataSource = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.POSTGRES_HOST,
  port: +(process.env.POSTGRES_PORT || 5432),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  entities: ['src/**/*.entity.{js,ts}'],
  migrations: ['src/**/*.migration.{js,ts}'],
  subscribers: ['src/**/*.subscriber.{js,ts}'],
  seeds: ['src/**/*.seed.{js,ts}'],
  factories: ['src/**/*.factory.{js,ts}'],
} as PostgresConnectionOptions);

export default dataSource;
