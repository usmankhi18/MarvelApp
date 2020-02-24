import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesIntentPage } from '../movies-intent/movies-intent';
import { AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

/**
 * Generated class for the MoviesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies-detail',
  templateUrl: 'movies-detail.html',
})
export class MoviesDetailPage {

  selectedItem: any;
  text: any;
  countries: any;
  errorMessage: string;
  video_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer,
    public youtube: YoutubeVideoPlayer, public atrCtrl: AlertController, public rest: RestProvider) {
    this.selectedItem = navParams.get('c');
    this.video_id = this.selectedItem.VideoID;
    //this.video_id = 'pWdKf3MneyI';
    this.text = this.selectedItem.MoviePlot;
  }

  getDownloads() {
    this.rest.getDownloads(this.selectedItem)
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
       }


       updateVideoUrl(id: string) {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data, so
        // that it's easier to check if the value is safe.
        let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0';
        return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesDetailPage');
    this.text = this.selectedItem.MoviePlot;
  }

  characters(event) {
    this.navCtrl.push(MoviesIntentPage, {
      c: this.selectedItem
    });
}

showDownloadAlert() {
  this.getDownloads();
  if(this.countries > 0){
  let alert = this.atrCtrl.create();
  alert.setTitle('Select Movies Print');

  alert.addInput({
    type: 'radio',
    label: '720p',
    value: '720p',
    checked: true
  });
   alert.addInput({
    type: 'radio',
    label: '1080p',
    value: '1080p',
    checked: false
  });
  alert.addInput({
    type: 'radio',
    label: '3D',
    value: '3D',
    checked: false
  });

  alert.addButton('Cancel');
  alert.addButton({
    text: 'OK',
    handler: data => {
      //this.testRadioOpen = false;
      //this.testRadioResult = data;
    }
  });
  alert.present();
}
else{
  let alert = this.atrCtrl.create({
    title: 'No Downloads',
    subTitle: 'Sorry !! No Downloads Available',
    buttons: ['OK']
  });
  alert.present();
}
}
}
