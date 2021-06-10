import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { UsersModule } from './users/users.module';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [UsersModule, CoffeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
