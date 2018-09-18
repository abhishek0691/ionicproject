import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmployerProfilePage } from '../employerprofile/employerprofile';
@Component({
selector: 'login-home',
templateUrl: 'login.html'
})
export class LoginPage {

constructor(public nav: NavController) {
    
}
  
EmployeeProfilePage()
{
this.nav.push(EmployerProfilePage);
}

}

 