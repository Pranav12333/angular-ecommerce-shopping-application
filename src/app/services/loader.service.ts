import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  public loadingSubject = new BehaviorSubject<any>(true);
  
    showloader(){
     this.loadingSubject.next(true);
    }
    hideloader(){
      this.loadingSubject.next(false);
    }
}
