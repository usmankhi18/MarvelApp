import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CharacterDetailPage } from '../character-detail/character-detail';

/**
 * Generated class for the MoviesIntentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies-intent',
  templateUrl: 'movies-intent.html',
})
export class MoviesIntentPage {

  errorMessage: any;
  body: any;
  countries: any;
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    this.selectedItem = navParams.get('c');
    this.getCountries();
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad MoviesIntentPage');
  }

  getCountries() {
    // console.log('Enter');
    //      this.http.post('http://localhost:20949/restservice/MoviesBySeries',{
    //       SeriesId: parseInt(this.selectedItem.SeriesId)},{}).subscribe(data => {
    //         console.log(this.selectedItem.SeriesId);
    //         this.body = data; 
    //         this.countries = this.body.MoviesArray;
    //         });
    this.rest.getMoviesCharacter(this.selectedItem)
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
