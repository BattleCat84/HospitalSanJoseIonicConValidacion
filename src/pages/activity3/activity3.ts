import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from "ionic-angular";
import { Activity4Page } from "../activity4/activity4";

@Component({
  selector: 'page-activity3',
  templateUrl: 'activity3.html'
})
export class Activity3Page {
 
  username: string;

  cardiologia: boolean;
  neurocirugia: boolean;
  cirugia: boolean;
  radiologia: boolean;
  nefrologia: boolean;
  mostrarMensaje: boolean;

  sexo: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
    this.username = this.navParams.get('nombre');

    console.log("Nombre: ", this.username);

    this.cardiologia = false;
    this.neurocirugia = false;
    this.cirugia = false;
    this.radiologia = false;
    this.nefrologia = false;

    this.sexo = "Mujer";
    this.mostrarMensaje = false;
  }

  actualizaNeurocirugia() {
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
  actualizarSexo(): void {
    if (this.mostrarMensaje) {
      this.showAlertSexo();
    }
    this.showAlertSexo();
  }

  showAlertNeurocirugia() {
    let alert = this.alertCtrl.create({
      title: 'Has pulsado en Neurocirugia',
      subTitle: 'El valor de Neurocirugia es: ' + this.neurocirugia,
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertCirugia() {
    let alert = this.alertCtrl.create({
      title: 'Has pulsado en Cirugia',
      subTitle: 'El valor de Cirugia es' + this.cirugia,
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertRadiologia() {
    let alert = this.alertCtrl.create({
      title: 'Has pulsado en Radiologia',
      subTitle: 'El valor de Radiologia es: ' + this.radiologia,
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertNefrologia() {
    let alert = this.alertCtrl.create({
      title: 'Has pulsado en Nefrologia',
      subTitle: 'El valor de Nefrologia es: ' + this.nefrologia,
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertSexo() {
    let alert = this.alertCtrl.create({
      title: 'Has pulsado en ' + this.sexo,
      subTitle: 'El valor del sexo es: ' + this.sexo,
      buttons: ['OK']
    });
    alert.present();
  }


  showAlertNombreIntroducido() {
    let alert = this.alertCtrl.create({
      title: 'Nombre Usuario',
      subTitle: 'El nombre introducido es: ' + this.username,
      buttons: ['OK']
    });
    alert.present();
  }

  irAOtraPagina() {
    this.navCtrl.push(Activity4Page);
  }
}
