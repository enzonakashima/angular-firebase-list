import { Component, VERSION } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  email: string;
  password: string;

  constructor(public authService: AuthService){

  }

  LoginWithEmail(){
    this.authService.LoginWithEmail(this.email, this.password);
    this.email = this.password = '';
  }

  LoginWithGoogle(){
    this.authService.LoginWithGoogle();
  }

  Logout(){
    this.authService.Logout();
  }
}
