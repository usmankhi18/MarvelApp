import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesDetailPage } from './movies-detail';

@NgModule({
  declarations: [
    MoviesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesDetailPage),
  ],
})
export class MoviesDetailPageModule {}
