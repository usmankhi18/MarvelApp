import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SeriesIntentPage } from '../series-intent/series-intent';

/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {
  countries: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
  }

  ionViewDidLoad() {
    this.getCountries();
    console.log('ionViewDidLoad SeriesPage');
  }

  getCountries() {
    this.rest.getSeries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
       }

       itemTapped(c) {
        this.navCtrl.push(SeriesIntentPage, {
        c: c
      });
      }
  }
