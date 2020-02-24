import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharactersIntentPage } from '../characters-intent/characters-intent';

/**
 * Generated class for the CharacterDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-detail',
  templateUrl: 'character-detail.html',
})
export class CharacterDetailPage {
  selectedItem:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('c');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterDetailPage');
  }

  movies(event) {
    this.navCtrl.push(CharactersIntentPage, {
      c: this.selectedItem
    });
}

}
