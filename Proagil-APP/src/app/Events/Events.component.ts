import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@ANGULAR/common/http';

@Component({
  selector: 'app-Events',
  templateUrl: './Events.component.html',
  styleUrls: ['./Events.component.css']
})
export class EventsComponent implements OnInit {


  constructor(private http: HttpClient) { }

  events : any = [] ;
  EventsFilter: any = [];
  marginImage = 2;
  widthImage = 40;
  showImage = false;
  searchList : string;
  _filterList : string;

  
  get filterList() :string
  {
    return this._filterList;
  }
  set filterList(value: string)
  {
    this._filterList = value;
    this.EventsFilter = this.filterList ? this.FilterEvent(this.filterList) : this.events;
  }

  FilterEvent(filter : string): any{
    filter = filter.toLocaleLowerCase();
    return this.events.filter(
      event => event.tema.toLocaleLowerCase().indexOf(filter) !== -1
    );
  }
  ngOnInit(){
    this.getEvents();
  }

  ChangeShowImage()
  {
    this.showImage = !this.showImage;
  }
  getEvents() {
    this.http.get('http://localhost:5000/api/values').subscribe
    (
      response => {this.events = response; console.log(response);},
      error => {console.log(error);}

    );
  }

}
