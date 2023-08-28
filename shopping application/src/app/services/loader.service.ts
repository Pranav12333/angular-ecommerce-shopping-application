import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  public loadingSubject = new BehaviorSubject<any>(false);

  showloader(timeoutMilliseconds: number = 5000) {
    this.loadingSubject.next(true);
   
  }

  hideloader(timeoutMilliseconds: number = 5000) {
    this.loadingSubject.next(false);
 
  }
}
