import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() {}
  maleDropdownChange$ = new BehaviorSubject<boolean>(false);
  femaleDropdownChange$ = new BehaviorSubject<boolean>(false);
}
