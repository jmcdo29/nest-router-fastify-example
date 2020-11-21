import { Routes } from 'nest-router';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { NinjaModule } from './ninja/ninja.module';

export const routes: Routes = [{
  path: 'ninja',
  module: NinjaModule,
  children: [
    {
      path: 'cats',
      module: CatModule,
    },
    {
      path: 'dogs',
      module: DogModule,
    }
  ]
}];
