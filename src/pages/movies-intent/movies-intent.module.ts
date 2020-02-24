import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesIntentPage } from './movies-intent';

@NgModule({
  declarations: [
    MoviesIntentPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesIntentPage),
  ],
})
export class MoviesIntentPageModule {}
