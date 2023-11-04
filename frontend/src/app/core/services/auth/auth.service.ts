import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {BASE_API_URL} from "../../constants/api"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerEndpoint = BASE_API_URL +'/api/register';
  private loginEndpoint = BASE_API_URL +'/api/login';
  constructor(private http: HttpClient) {}
  registerUser(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.registerEndpoint, data, { headers });
  }
  login(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.loginEndpoint, data, { headers });
  }
}
