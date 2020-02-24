import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharactersIntentPage } from './characters-intent';

@NgModule({
  declarations: [
    CharactersIntentPage,
  ],
  imports: [
    IonicPageModule.forChild(CharactersIntentPage),
  ],
})
export class CharactersIntentPageModule {}
