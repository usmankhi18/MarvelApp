import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { SeriesIntentPage } from '../pages/series-intent/series-intent';
import { HttpModule } from '@angular/http';
import { MoviesIntentPage } from '../pages/movies-intent/movies-intent';
import { MoviesDetailPage} from '../pages/movies-detail/movies-detail';
import { CharacterDetailPage } from '../pages/character-detail/character-detail';
import { CharactersIntentPage } from '../pages/characters-intent/characters-intent';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    SeriesIntentPage,
    MoviesIntentPage,
    CharactersIntentPage,
    MoviesDetailPage,
    CharacterDetailPage
    // SeriesPage,
    // MainPage,
    // MoviesPage,
    // CharactersPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
    // IonicPageModule.forChild(MainPage),
    // IonicPageModule.forChild(SeriesPage),
    // IonicPageModule.forChild(MoviesPage),
    // IonicPageModule.forChild(CharactersPage),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    SeriesIntentPage,
    MoviesIntentPage,
    CharactersIntentPage,
    MoviesDetailPage,
    CharacterDetailPage
    // SeriesPage,
    // MainPage,
    // MoviesPage,
    // CharactersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
  ]
})
export class AppModule { }
// export class MainPageModule {}
// export class SeriesPageModule {}
// export class MoviesPageModule {}
// export class CharactersPageModule {}
