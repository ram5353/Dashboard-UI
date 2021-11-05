import { Component, OnInit } from '@angular/core';
import {Households} from '../../models/households';
import {DataServiceService} from '../../services/data-service.service';

@Component({
  selector: 'app-households',
  templateUrl: './households.component.html',
  styleUrls: ['./households.component.css']
})
export class HouseholdsComponent implements OnInit {

  constructor(private service: DataServiceService) { }

  columns = ['Household Number', 'Loyalty flag', 'Age range', 'Marital Status', 'Income Range', 'Homeowner Desc',
              'Household Composition', 'Household Size', 'Children', 'product Number', 'Department', 'Commodity', 'Basket number',
              'Spend', 'Units', 'Store Region', 'Week Number', 'year'];

  index = ['hshdNum', 'loyaltyFlag', 'ageRange', 'maritalStatus', 'incomeRange', 'homeownerDesc',
    'hshdComposition', 'hshdSize', 'children', 'productNum', 'department', 'commodity', 'basketNum',
    'spend', 'units', 'storeRegion', 'weekNum', 'year'];

  households: Households[] = [];

  ngOnInit(): void {
    this.service.getHouseholdsData().subscribe ((response) => {
        this.households = response;
        console.log(this.households, 'data check');
      },
      (error) => {
        console.log('Error Occurred : ' + error);
      }
    );
  }

}
