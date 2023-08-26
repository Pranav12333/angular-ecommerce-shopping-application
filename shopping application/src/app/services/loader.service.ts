import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  private loadingSubject = new BehaviorSubject <any>(false);
  public isLoading$ = this.loadingSubject.asObservable();

  showloader(){
    this.loadingSubject.next(true);
  }
  hideloader(){
    this.loadingSubject.next(false);
  }
}
