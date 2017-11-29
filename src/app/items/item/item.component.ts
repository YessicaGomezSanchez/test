import { Component, OnInit,Input } from '@angular/core';
import { Iitem } from '../item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input () item: Iitem;
  constructor() { }

  ngOnInit() {
  }

}
