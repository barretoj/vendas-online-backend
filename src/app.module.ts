import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/interfaces/user.entity';
import { CreateTableUser1695655686782 } from './migration/1695655686782-create_table_user';
import { CreateTableState1695657484025 } from './migration/1695657484025-create_table_state';
import { CreateTableCity1695657500555 } from './migration/1695657500555-create_table_city';
import { CreateTableAddress1695657508862 } from './migration/1695657508862-create_table_address';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [UserEntity],
      migrations: [
        CreateTableUser1695655686782,
        CreateTableState1695657484025,
        CreateTableCity1695657500555,
        CreateTableAddress1695657508862,
      ],
      migrationsRun: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
