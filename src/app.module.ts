import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import keys from "./config/keys";

@Module({
  imports: [UsersModule, ProductsModule, MongooseModule.forRoot(keys.mongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
