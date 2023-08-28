import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private usernameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public username$: Observable<string | null> = this.usernameSubject.asObservable();

  // names = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) { }
  setUsername(username: string) {
    this.usernameSubject.next(username);
  }

  getUsernameValue(): string | null {
    return this.usernameSubject.getValue();
  }
  
  clearUsername() {
    this.usernameSubject.next(null);
  }

  postRegistrationData(data: any) {
    return this.http.post("http://localhost:3000/UserAuthData", data);
  }   

  getRegistrationData() { 
    return this.http.get("http://localhost:3000/UserAuthData");
  }

  validateUserCredentials(username: string, password: string) {
    return this.getRegistrationData()
      .pipe(
        map((res: any) => {
          const isValidUser = res.some((item: any) => item.username === username && item.password === password);
          return isValidUser;
        })
      );
  }
}
