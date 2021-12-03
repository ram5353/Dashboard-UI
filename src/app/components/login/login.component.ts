import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {UserRegistationService} from '../../services/user-registation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: User = new User();
  loggedUser: any;
  check = false;
  loginCheck = true;
  loginSuccess = false;
  title = 'UPLOAD FILES';
  description = 'Uploding and Downloading Files';

  constructor(private service: UserRegistationService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogIn() {
    const resp = this.service.doLogin(this.loginUser);
    resp.subscribe(response => {
      this.loggedUser = response;
      if (this.loggedUser.firstName === null) {
        this.check = true;
      } else {
        this.loginSuccess = true;
        this.loginCheck = false;
      }
    });
  }

  returnToRegister() {
    this.router.navigate(['/register']);
  }
}
