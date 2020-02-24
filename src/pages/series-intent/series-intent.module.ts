import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeriesIntentPage } from './series-intent';

@NgModule({
  declarations: [
    SeriesIntentPage,
  ],
  imports: [
    IonicPageModule.forChild(SeriesIntentPage),
  ],
})
export class SeriesIntentPageModule {}
