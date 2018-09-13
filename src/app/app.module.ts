import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EmployerProfilePage } from '../pages/employerprofile/employerprofile';
import { JobPage } from '../pages/job/job';
import { JobProfilePage } from '../pages/jobseekerprofile/jobseekerprofile';
import { JobSearchPage } from '../pages/jobsearch/jobsearch';
import { JobWorkerPage } from '../pages/jobworker/jobworker';
import { RandomWorkerPage } from '../pages/randomworker/randomworker';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    EmployerProfilePage,
    JobPage,
    JobProfilePage,
    JobSearchPage,
    JobWorkerPage,
    RandomWorkerPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    EmployerProfilePage,
    JobPage,
    JobProfilePage,
    JobSearchPage,
    JobWorkerPage,
    RandomWorkerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
