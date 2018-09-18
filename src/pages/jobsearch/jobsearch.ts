import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {JobWorkerPage} from '../jobworker/jobworker';

@Component({
  selector: 'page-jobsearch',
  templateUrl: 'jobsearch.html'
})
export class JobSearchPage {

  constructor(public nav: NavController) {

  }

jobworkerlink()
{
this.nav.push(JobWorkerPage);
}


}

 