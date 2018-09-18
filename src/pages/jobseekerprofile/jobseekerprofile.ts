import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {JobSearchPage} from '../jobsearch/jobsearch';
@Component({
  selector: 'page-jobseekerprofile',
  templateUrl: 'jobseekerprofile.html'
})
export class JobProfilePage {

  constructor(public nav: NavController) {

  }
 jobsearch()
{
this.nav.push(JobSearchPage);
}


}

 