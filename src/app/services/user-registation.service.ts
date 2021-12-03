import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  ROOT_URL = 'http://userservice123.us-east-2.elasticbeanstalk.com';

  constructor(private http: HttpClient) { }


  public doRegistration(user) {
    return this.http.post(this.ROOT_URL + '/register', user, {responseType: 'text' as 'json'});
  }

  public doLogin(user) {
    return this.http.post(this.ROOT_URL + '/login', user);
  }

  public getUsers() {
    return this.http.get(this.ROOT_URL + '/getAllUsers');
  }

  public getUserByEmail(email) {
    return this.http.get(this.ROOT_URL + '/findUser/' + email);
  }

  public deleteUser(id) {
    return this.http.delete(this.ROOT_URL + '/cancel/' + id);
  }
}
