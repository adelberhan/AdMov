import { Component, Input, OnInit } from '@angular/core';
import { Services } from 'services/src';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'trends-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {
  imgPrefix = 'https://image.tmdb.org/t/p/w500';

  @Input() trendingMovies: any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
 autoplayHoverPause:true,
    dots: false,
    autoplaySpeed:1000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    items:1,
    navSpeed: 700,
    autoplayTimeout: 1100,
    // autoplayTimeout: 5,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 4,
      },
      740: {
        items: 3,
      },
      940: {
        items: 9,
      },
    },
    nav: true,
  };

  constructor(private _MovesService: Services) {}
}
