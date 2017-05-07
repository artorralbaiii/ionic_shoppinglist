import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  newItem : string;
  items: string[] = [];

  constructor(public navCtrl: NavController, private ds: DataService) {

  }

  ngOnInit() {
    this.ds.getItems()
      .then((val) => {
        this.items = val.split(',');
      });
  }

  addItem() {
    this.ds.saveItem(this.newItem);
    this.items.push(this.newItem);
    this.newItem = '';
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.ds.removeItem(this.items);
  }

}
