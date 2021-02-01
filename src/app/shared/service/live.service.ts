import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Live } from '../model/live.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})

export class LiveService {

  apiUrl = 'http://localhost:8081/lives';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  public getLivesWithFlag(flag: string): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl + `?flag=${flag}`);
  }

  public postLives(live: any): Observable<Live>{
    return this.httpClient.post<any>(this.apiUrl, live, this.httpOptions);
  }
  

}
