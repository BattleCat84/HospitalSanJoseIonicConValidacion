import { Component } from '@angular/core';
import { NavController} from "ionic-angular";
import { Activity5Page } from "../activity5/activity5";

@Component({
  selector: 'page-activity4',
  templateUrl: 'activity4.html'
})
export class Activity4Page {

  constructor(public navCtrl: NavController) {
    
  }

  irAOtraPagina() {
    this.navCtrl.push(Activity5Page);

  }
}
