import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '258697',
      database: 'usercrud',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [
        __dirname.includes('dist')
          ? 'dist/src/core/database/migrations/*.js'
          : 'src/core/database/migrations/*.ts',
      ],
    }),
  ],
})
export class DataBaseModule {}
