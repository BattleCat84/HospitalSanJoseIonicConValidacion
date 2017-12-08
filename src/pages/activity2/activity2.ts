import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Activity3Page } from "../activity3/activity3";

@Component({
  selector: 'page-activity2',
  templateUrl: 'activity2.html',

})

export class Activity2Page {

 

  formgroup: FormGroup;
  

  constructor(public navCtrl: NavController, public fb:FormBuilder ) {


    this.formgroup = fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
       
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  submit(): void {
    alert(JSON.stringify(this.formgroup.value));
    this.navCtrl.push(Activity3Page);
  }  
}

   










 
 

  


 
    
    
