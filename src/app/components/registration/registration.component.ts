import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {UserRegistationService} from '../../services/user-registation.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: User = new User();
  message: any;
  oneClick = false;

  constructor(private service: UserRegistationService, private router: Router) {

  }

  ngOnInit() {
  }


  public registerNow() {
    const resp = this.service.doRegistration(this.user);
    resp.subscribe((data) => this.message = data);
    this.oneClick = true;
  }

    backTogLogin() {
        this.router.navigate(['/login']);
    }
}
