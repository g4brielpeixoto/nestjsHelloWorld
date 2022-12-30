import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
const configService = new ConfigService()

export function databaseConfig(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: 'usercrud',
    entities: [__dirname + '/entities/*entity{.ts,.js}'],
    synchronize: true,
    migrationsTransactionMode: 'each',
    migrations: [
      __dirname.includes('dist')
        ? 'dist/src/core/database/migrations/*.js'
        : 'src/core/database/migrations/*.ts',
    ],
  }
}
