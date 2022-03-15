import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:4200';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  GitHubSignin(): Observable<any> {
    return this.http.get('http://localhost:3000/login');
  }
  
  GetAccessToken(Code: String, clientId: String, Client_Sceret: String): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'cache-control': 'no-cache', 'Accept': 'application/json; charset=UTF-8' });
    headers = headers.set("Access-Control-Allow-Origin", "*");
    const params_Data = {
      client_id: clientId,
      client_sceret: Client_Sceret,
      code: Code
    };
    return this.http.post(`http://localhost:3000/oauth-callback`, params_Data, { headers: headers })
  }
}

