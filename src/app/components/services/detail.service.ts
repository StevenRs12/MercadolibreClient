import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from 'src/app/interfaces/detail.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) {}

  public detail(id: string): Observable<Detail> {
    const url = `${environment.urlAPI}items/${id}`;

    return this.http.get<Detail>(url);
  }
}
