import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // feilds --have a this identifier
  public hero: Hero;
  private temp: any;

  // constructor
  constructor(private route: ActivatedRoute) { }

  // methods
  ngOnInit() {
    this.temp = this.route.params.subscribe(params => {
      HEROES.forEach((el) => {
        if (el.id === +params['id']) {
          const name = el.name;
          // console.log(el);
          this.hero = el;
        }
      });
    });
  }

}
