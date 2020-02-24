import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { MoviesDetailPage } from '../movies-detail/movies-detail';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  countries: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
  }

  ionViewDidLoad() {
    this.getCountries();
    console.log('ionViewDidLoad MoviesPage');
  }

  getCountries() {
    this.rest.getMovies()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
       }
       itemTapped(c) {
        this.navCtrl.push(MoviesDetailPage, {
        c: c
      });
      }

}
