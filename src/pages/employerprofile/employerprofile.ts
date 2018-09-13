import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {JobPage} from '../job/job';


@Component({
selector: 'employerprofile-home',
templateUrl: 'employerprofile.html'
})
export class EmployerProfilePage {

constructor(public nav: NavController) {

}

jobapply()
{
this.nav.push(JobPage);
}

}

 