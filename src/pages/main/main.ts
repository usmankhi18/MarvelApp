import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MainPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  seriesRoot = 'SeriesPage'
  moviesRoot = 'MoviesPage'
  charactersRoot = 'CharactersPage'


  constructor(public navCtrl: NavController) {}

}
