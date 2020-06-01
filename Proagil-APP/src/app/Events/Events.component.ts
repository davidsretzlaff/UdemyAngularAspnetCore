import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@ANGULAR/common/http';

@Component({
  selector: 'app-Events',
  templateUrl: './Events.component.html',
  styleUrls: ['./Events.component.css']
})
export class EventsComponent implements OnInit {


  constructor(private http: HttpClient) { }

  events : any ;

  ngOnInit(){
    this.getEvents();
  }
  getEvents() {
    this.http.get('http://localhost:5000/api/values').subscribe
    (
      response => {this.events = response; console.log(response);},
      error => {console.log(error);}

    );
  }

}
