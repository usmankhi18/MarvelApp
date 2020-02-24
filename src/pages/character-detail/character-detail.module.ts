import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterDetailPage } from './character-detail';

@NgModule({
  declarations: [
    CharacterDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterDetailPage),
  ],
})
export class CharacterDetailPageModule {}
