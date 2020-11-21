import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjaModule } from './ninja/ninja.module';
import { DogModule } from './dog/dog.module';
import { CatModule } from './cat/cat.module';
import { RouterModule } from 'nest-router';
import { routes } from './routes';

@Module({
  imports: [RouterModule.forRoutes(routes), NinjaModule, DogModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
