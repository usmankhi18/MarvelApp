import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CharacterDetailPage } from '../character-detail/character-detail';

/**
 * Generated class for the CharactersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {

  countries: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
  }

  ionViewDidLoad() {
    this.getCountries();
    console.log('ionViewDidLoad CharactersPage');
  }

  getCountries() {
    this.rest.getCharacters()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
       }

       itemTapped(c) {
        this.navCtrl.push(CharacterDetailPage, {
        c: c
      });
      }

}
