import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Activity1Page } from '../pages/activity1/activity1';
import { Activity2Page } from '../pages/activity2/activity2';
import { Activity3Page } from '../pages/activity3/activity3';
import { Activity4Page } from '../pages/activity4/activity4';
import { Activity5Page } from '../pages/activity5/activity5';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    Activity1Page,
    Activity2Page,
    Activity3Page,
    Activity4Page,
    Activity5Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    ItemDetailsPage,
    ListPage,
    Activity1Page,
    Activity2Page,
    Activity3Page,
    Activity4Page,
    Activity5Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
