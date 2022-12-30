import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'

const configService = new ConfigService()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: 'usercrud',
      synchronize: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [
        __dirname.includes('dist')
          ? 'dist/src/core/database/migrations/*.js'
          : 'src/core/database/migrations/*.ts',
      ],
    }),
  ],
})
export class DatabaseModule {}
