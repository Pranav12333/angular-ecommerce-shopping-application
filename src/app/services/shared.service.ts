import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private showCarouselSource = new Subject<boolean>();
  showCarousel$ = this.showCarouselSource.asObservable();
  
  constructor() { }

  setShowCarousel(show: boolean) {
    this.showCarouselSource.next(show);
  }
}
