import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { M } from '../m';
import { P } from '../p';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:M[]=[];
  fm:P[]=[];
  filteredMovies:M[];
 searchval='';
  constructor(private movieService:MoviesService) {

  }

  ngOnInit(): void {
   this.search(this.searchval);
  }
  search(t:string):void{
    this.movies=[];
    this.searchval=t;
    this.movieService.getMovies(t).subscribe({
      next: movies => this.movies = movies.Search,
      error: err =>console.log(err)
     });
  }
  _listFilter:string;
  errorMessage:string;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.filteredMovies=this.listFilter?this.performFilter(this.listFilter):this.movies;
  }
  performFilter(filterBy:string):M[]{
    filterBy=filterBy.toLowerCase();
    return this.movies.filter((product : M)=>
    product.Title.toLocaleLowerCase().indexOf(filterBy)!==-1);
}
}
