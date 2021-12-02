import { PipeTransform, Pipe } from '@angular/core';
import {Households} from '../models/households';

@Pipe({
  name: 'householdFilter'
})
export class HouseholdFilterPipe implements PipeTransform {
  transform(households: Households[], searchTerm: string): Households[] {
    if (!households || !searchTerm) {
      return households;
    }

    return households.filter(household =>
      household.hshdNum.toString().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
