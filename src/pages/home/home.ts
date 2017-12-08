import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Pierre Munin -- 1106420
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {}
  ionViewDidLoad() {}

  logout(){
    this.navCtrl.push(LoginPage); 
  }
}