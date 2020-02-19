import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireOfflineDatabase } from '../../app/database/database';
import { AfoListObservable } from '../../app/database/list/afo-list-observable';
import { AfoObjectObservable } from '../../app/database/object/afo-object-observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info: AfoObjectObservable<any>;
  items: AfoListObservable<any[]>;
  constructor(
    public navCtrl: NavController,
    afoDatabase: AngularFireOfflineDatabase) {

      console.log('test')
    this.info = afoDatabase.object('/info');
    this.items = afoDatabase.list('/items');
  }
}
