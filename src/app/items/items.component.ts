import { Component, OnInit } from '@angular/core';
import { Iitem } from './item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Iitem[] =
    [
      {
        "id": 1,
        "firstName": "Betti",
        "lastName": "Lamasna",
        "email": "blamasna0@cyberchimps.com",
        "gender": "Female",
        "isValid": true,
        "birthday": "2017-01-23 23:06:19"
      },
      { "id": 2, "firstName": "Ericka", "lastName": "Oakenfull", "email": "eoakenfull1@chronoengine.com", "gender": "Female", "isValid": false, "birthday": "2017-04-23 02:46:45" }, { "id": 3, "firstName": "Nanci", "lastName": "Colmer", "email": "ncolmer2@xrea.com", "gender": "Female", "isValid": false, "birthday": "2016-11-27 13:57:02" }, { "id": 4, "firstName": "Susanne", "lastName": "Simmins", "email": "ssimmins3@unicef.org", "gender": "Female", "isValid": true, "birthday": "2017-08-24 21:17:30" }, { "id": 5, "firstName": "Helene", "lastName": "Siddele", "email": "hsiddele4@indiatimes.com", "gender": "Female", "isValid": false, "birthday": "2017-04-26 18:26:43" }, { "id": 6, "firstName": "Holly-anne", "lastName": "Yewman", "email": "hyewman5@who.int", "gender": "Female", "isValid": true, "birthday": "2017-07-25 00:10:07" }, { "id": 7, "firstName": "Timmi", "lastName": "Ondrak", "email": "tondrak6@mayoclinic.com", "gender": "Female", "isValid": false, "birthday": "2017-03-07 14:26:52" }, { "id": 8, "firstName": "Nicolette", "lastName": "Doblin", "email": "ndoblin7@dailymotion.com", "gender": "Female", "isValid": true, "birthday": "2017-09-12 04:40:18" }, { "id": 9, "firstName": "Randy", "lastName": "Hess", "email": "rhess8@wufoo.com", "gender": "Male", "isValid": false, "birthday": "2017-09-09 11:30:58" }, { "id": 10, "firstName": "Isac", "lastName": "Prandy", "email": "iprandy9@pbs.org", "gender": "Male", "isValid": false, "birthday": "2017-06-04 22:27:05" }]

  constructor() { }

  ngOnInit() {
  }

}
