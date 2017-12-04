import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Iitem } from '../item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Iitem;
  @Output() deleteItemEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteItem(id) {
    // alert('Hola'+ id);
    this.deleteItemEvent.emit({
      id
    });
  }
}
