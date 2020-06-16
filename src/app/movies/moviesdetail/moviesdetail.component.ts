import { Component, OnInit } from '@angular/core';
import { P } from 'src/app/p';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-moviesdetail',
  templateUrl: './moviesdetail.component.html',
  styleUrls: ['./moviesdetail.component.css']
})
export class MoviesdetailComponent implements OnInit {
  pageTitle = 'MOVIE NAME';
  errorMessage = '';
  product:P|undefined;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: MoviesService,
              ) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getProduct(id);
    }
  }

  getProduct(id: string) {
    this.productService.getMovie(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
