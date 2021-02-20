import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  export class ContactComponent implements OnInit {

    model: any = {};

    constructor(
      private http: HttpClient
    ){}

    ngOnInit() {
       }
       onSubmit(name: any, subject: any, email: any, message: any) {
          const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
          this.http.post('https://formspree.io/f/meqpwnon',
            { name: name, subject: subject, replyto: email, message: message },
            { 'headers': headers });
        }
}
