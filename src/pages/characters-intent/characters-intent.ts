import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesDetailPage } from '../movies-detail/movies-detail';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the CharactersIntentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-characters-intent',
  templateUrl: 'characters-intent.html',
})
export class CharactersIntentPage {
  selectedItem: any;
  errorMessage: any;
  body: any;
  countries: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    this.selectedItem = navParams.get('c');
    this.getCountries();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharactersIntentPage');
  }

  getCountries() {
    // console.log('Enter');
    //      this.http.post('http://localhost:20949/restservice/MoviesBySeries',{
    //       SeriesId: parseInt(this.selectedItem.SeriesId)},{}).subscribe(data => {
    //         console.log(this.selectedItem.SeriesId);
    //         this.body = data; 
    //         this.countries = this.body.MoviesArray;
    //         });
    this.rest.getCharactersMovies(this.selectedItem)
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
