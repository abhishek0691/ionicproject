import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RandomWorkerPage} from '../randomworker/randomworker';

@Component({
  selector: 'page-jobworker',
  templateUrl: 'jobworker.html'
})
export class JobWorkerPage {

  constructor(public nav: NavController) {

  }

  randomworkerlink()
{
this.nav.push(RandomWorkerPage);
}


}

 