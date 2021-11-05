import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  ROOT_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getTotalSales(): Observable<any> {
    return this.http.get(this.ROOT_URL + '/transactions/totalsales');
  }

  public getHouseholdsData(): Observable<any> {
    return this.http.get(this.ROOT_URL + '/house-holds/getInfo');
  }


}
