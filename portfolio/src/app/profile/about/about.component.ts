import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
    this.age = this.calculateAge();
  }

  age: string;

  ngOnInit(): void {

  }

  calculateAge():string {
    const birthDate = new Date(1998, 1, 13);
    var diff_ms = Date.now() - birthDate.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970) + ' ans';
  }



}
