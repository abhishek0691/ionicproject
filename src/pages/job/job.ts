import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {JobProfilePage} from '../jobseekerprofile/jobseekerprofile';
@Component({
  selector: 'page-job',
  templateUrl: 'job.html'
})
export class JobPage {

  constructor(public nav: NavController) {


  }

	 jobprofile()
	{
	this.nav.push(JobProfilePage);
	}

 }
