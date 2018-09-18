import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EmployerProfilePage } from '../pages/employerprofile/employerprofile';
import { JobPage } from '../pages/job/job';
import { JobProfilePage } from '../pages/jobseekerprofile/jobseekerprofile';
import { JobSearchPage } from '../pages/jobsearch/jobsearch';
import { JobWorkerPage } from '../pages/jobworker/jobworker';
import { RandomWorkerPage } from '../pages/randomworker/randomworker';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Employer Profile', component: EmployerProfilePage },
      { title: 'Job', component: JobPage },
      { title: 'Job Profile', component: JobProfilePage },
      { title: 'Job Search', component: JobSearchPage },
      { title: 'Job Worker', component: JobWorkerPage },
      { title: 'Random Worker', component: RandomWorkerPage },
     
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
