import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
    this.age = new Date().getFullYear() - 1998 + ' ans';
  }

  age: string;

  ngOnInit(): void {
  }



}
