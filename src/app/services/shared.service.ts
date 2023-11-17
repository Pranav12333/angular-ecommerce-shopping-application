import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxUiLoaderConfig, NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private showCarouselSource = new Subject<boolean>();
  showCarousel$ = this.showCarouselSource.asObservable();

  setShowCarousel(show: boolean) {
    this.showCarouselSource.next(show);
  }
}
