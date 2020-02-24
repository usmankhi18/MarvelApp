import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  items: any;
  text: any;
  objs = new Array<JSON>();
  results = new Array<JSON>();

  private apiUrl = 'http://marvel.somee.com/restservice/AllSeries';
  private apiUrlMovies = 'http://marvel.somee.com/restservice/AllMovies';
  private apiUrlCharacters = 'http://marvel.somee.com/restservice/AllCharacters';
  private apiUrlMoviesBySeries = 'http://marvel.somee.com/restservice/MoviesBySeries';
  private apiUrlMoviesCharacter = 'http://marvel.somee.com/restservice/CharactersByMoviesID';
  private apiUrlCharacterMNovies = 'http://marvel.somee.com/restservice/MoviesByCharacterID';
  private apiUrlDownloads = 'http://marvel.somee.com/restservice/DownloadsByMoviesID';

  // private apiUrl = 'http://localhost:20949/restservice/AllSeries';
  // private apiUrlMovies = 'http://localhost:20949/restservice/AllMovies';
  // private apiUrlCharacters = 'http://localhost:20949/restservice/AllCharacters';
  // private apiUrlMoviesBySeries = 'http://localhost:20949/restservice/MoviesBySeries';
  // private apiUrlMoviesCharacter = 'http://localhost:20949/restservice/CharactersByMoviesID';
  //private apiUrl = 'http://localhost:8732/Service1/data/11';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');


  }

  getSeries(): Observable<string[]> {
    return this.http.get(this.apiUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSeriesMovies(SeriesId: any): Observable<string[]> {
    return this.http.post(this.apiUrlMoviesBySeries, { SeriesID: SeriesId.SeriesId }, {})
      .map(this.extractData1)
      .catch(this.handleError);
  }

  getDownloads(SeriesId: any): Observable<string[]> {
    return this.http.post(this.apiUrlDownloads, { SeriesID: SeriesId.SeriesId }, {})
      .map(this.extractData3)
      .catch(this.handleError);
  }

  getMovies(): Observable<string[]> {
    return this.http.get(this.apiUrlMovies)
      .map(this.extractData1)
      .catch(this.handleError);
  }

  getMoviesCharacter(SeriesId: any): Observable<string[]> {
    return this.http.post(this.apiUrlMoviesCharacter, { SeriesID: SeriesId.MovieId }, {})
      .map(this.extractData2)
      .catch(this.handleError);
  }

  getCharactersMovies(SeriesId: any): Observable<string[]> {
    return this.http.post(this.apiUrlCharacterMNovies, { SeriesID: SeriesId.CharacterId }, {})
      .map(this.extractData1)
      .catch(this.handleError);
  }

  getCharacters(): Observable<string[]> {
    return this.http.get(this.apiUrlCharacters)
      .map(this.extractData2)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    // let resp = res.json();
    let x: any;
    x = res;
    let body = x.SeriesArray.sort(function (a, b) { return (a.SeriesName > b.SeriesName) ? 1 : ((b.SeriesName > a.SeriesName) ? -1 : 0); });
    return body || {};
  }

  private extractData1(res: Response) {
    // let resp = res.json();
    let x: any;
    x = res;
    let body = x.MoviesArray.sort(function (a, b) { return (a.MovieName > b.MovieName) ? 1 : ((b.MovieName > a.MovieName) ? -1 : 0); });
    return body || {};
  }

  private extractData2(res: Response) {
    // let resp = res.json();
    let x: any;
    x = res;
    let body = x.CharactersArray.sort(function(a,b) {return (a.CharacterName> b.CharacterName) ? 1 : ((b.CharacterName > a.CharacterName) ? -1 : 0);} );
    //for (let index = 0; index < 4; index++) {
    //  x.CharactersArray = x.CharactersArray.concat(x.CharactersArray);
    //}
    //let body = x.CharactersArray.sort(function (a, b) { return (a.CharacterName > b.CharacterName) ? 1 : ((b.CharacterName > a.CharacterName) ? -1 : 0); });
    //let body = x.CharactersArray;
    return body || {};
  }

  private extractData3(res: Response) {
    // let resp = res.json();
    let x: any;
    x = res;
    let body = x.DownloadsArray;
    //for (let index = 0; index < 4; index++) {
    //  x.CharactersArray = x.CharactersArray.concat(x.CharactersArray);
    //}
    //let body = x.CharactersArray.sort(function (a, b) { return (a.CharacterName > b.CharacterName) ? 1 : ((b.CharacterName > a.CharacterName) ? -1 : 0); });
    //let body = x.CharactersArray;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
