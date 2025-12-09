import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Produto } from './produto/entities/produto.entity';
import { Categoria } from './categoria/entities/categoria.entities';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_lojaGames',
    entities: [Produto, Categoria],
    synchronize: true
  })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
