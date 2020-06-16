import { Injectable } from '@angular/core';
import { M } from '../m';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  getMovies(t:string):Observable<any>{
    return this.http.get<any>('https://omdbapi.com/?s='+t+'&apikey=5e91ddc2')
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),

      );

  }
  getMovie(t:string):Observable<any>{
    console.log('https://www.omdbapi.com/?i='+t+'&plot=full&apikey=5e91ddc2');
    return this.http.get<any>('https://www.omdbapi.com/?i='+t+'&plot=full&apikey=5e91ddc2')
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
      );
  }
}
