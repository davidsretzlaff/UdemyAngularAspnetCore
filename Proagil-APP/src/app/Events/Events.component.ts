import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Events',
  templateUrl: './Events.component.html',
  styleUrls: ['./Events.component.css']
})
export class EventsComponent implements OnInit {

  events : any = [
    {
      EventId: 1,
      Theme: 'Angular',
      Local: 'Porto Alegre',
      Quantity: 200
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
