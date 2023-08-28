import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastrService:ToastrService) { }

  registerSuccessToaster(){this.toastrService.success('registered successfully', '', {
    timeOut: 1000, 
    positionClass: 'toast-top-center',
    progressBar: true, 
    closeButton: true, 
    tapToDismiss: false, 
  });
  }
  logInSuccessToaster() {
    this.toastrService.success('logged in successfully', '', {
      timeOut: 1000, 
      positionClass: 'toast-top-center'
    });
  }

  loginFailToaster() {
    this.toastrService.error('log in failed', '', {
      timeOut: 1000, 
      positionClass: 'toast-top-center'
    });
  }

  logOutToaster() {
    this.toastrService.info('logged out', '', {
      timeOut: 1000, 
      positionClass: 'toast-top-center'
    });
  }


}
