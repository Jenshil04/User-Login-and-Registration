import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  addUsers(data:any):Observable<any>{
    return this.http.post ('http://localhost:3000/user-data', data);
  }
  addUser():Observable<any>{
    return this.http.get('http://localhost:3000/user-data')
  }
  loginUser(credentials: { username: string; password: string, email: string}): Observable<any> {
    const loginUrl = `${'http://localhost:3000/user-data'}?username=${credentials.username}&password=${credentials.password}&email=${credentials.email}`;

    return this.http.get(loginUrl).pipe(
      catchError((error) => {
        console.error('Login failed:', error);
        return throwError('Invalid credentials');
      })
    );
  }
}
