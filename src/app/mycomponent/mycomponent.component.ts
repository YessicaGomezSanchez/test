import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  title = 'Maria Yessica';
  author='Yuxi';
  count = 0;
  imgSource = './../../favicon.ico';
  enabled= false;
  constructor() { }

  ngOnInit() {
  }

}
