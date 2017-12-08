import { Component } from '@angular/core';
import { AlertController} from "ionic-angular";


@Component({
  selector: 'page-activity5',
  templateUrl: 'activity5.html'
})
export class Activity5Page {

  cardiologia: boolean;
  neurocirugia: boolean;
  cirugia: boolean;
  radiologia: boolean;
  nefrologia: boolean;

  constructor(public alertCtrl: AlertController) {

    this.cardiologia = false;
    this.neurocirugia = false;
    this.cirugia = false;
    this.radiologia = false;
    this.nefrologia = false; 
  }

  actualizarCardiologia(){
    this.showAlertCardiologia();
  }

  actualizarNeurocirugia() {
    this.showAlertNeurocirugia();
  }

  actualizaCirugia() {
    this.showAlertCirugia();
  }

  actualizaRadiologia() {
    this.showAlertRadiologia();
  }

  actualizaNefrologia() {
    this.showAlertNefrologia();
  }

  showAlertCardiologia() {
    let alert = this.alertCtrl.create({
      title: 'El Doctor en Cardiologia es Jose Plasencia',
      subTitle: 'Consulta ',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertNeurocirugia() {
    let alert = this.alertCtrl.create({
    title: 'La Doctora en Neurocirugia es María Lopez Hernández',
      subTitle: 'Consulta',
        buttons: ['OK']
    });
    alert.present();
  }

  showAlertCirugia() {
    let alert = this.alertCtrl.create({
      title: 'El Doctor en Cirugia es Carlos Suarez Naranjo',
      subTitle: 'Consulta',
      buttons: ['OK']
    });
    alert.present();
  }
  4
  showAlertRadiologia() {
    let alert = this.alertCtrl.create({
      title: 'El doctos en Radiologia Antonio Sanchez',
      subTitle: 'Consulta',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertNefrologia() {
    let alert = this.alertCtrl.create({
      title: 'La doctora en Nefrologia Marina Castro Ojeda',
      subTitle: 'Consulta',
      buttons: ['OK']
    });
    alert.present();
  }

}
