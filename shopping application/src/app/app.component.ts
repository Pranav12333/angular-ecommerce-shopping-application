import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  isLoading: any;
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.loadingSubject.subscribe((res) => {
      if (res) { this.isLoading = true } 
      else { this.isLoading = false }
    })
  }
}
