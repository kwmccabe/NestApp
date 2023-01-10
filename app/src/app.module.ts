import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),      /* process.env.NAME */
    TypeOrmModule.forRoot({
        type:    'mysql',
        host:     process.env.MYSQL_HOST,
        port:     +process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        entities: [
            Todo,
            ],
        synchronize: true,
        }),
    TodoModule,
    ],
  controllers: [
    AppController
    ],
  providers: [
    AppService
    ],
})
export class AppModule {}

