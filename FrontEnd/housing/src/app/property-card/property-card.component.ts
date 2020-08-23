import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  //constructor() { }

  //ngOnInit() { }

  Property:any = {
    "Id":1,
    "Name":"Tipu House",
    "Type":"House",
    "Price":12000
  }

}
