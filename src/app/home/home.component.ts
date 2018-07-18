import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  greeting = 'Welcome to my Angular App';
  introduction = 'A collection of various Angular applications';

  ngOnInit() {
  }

}
