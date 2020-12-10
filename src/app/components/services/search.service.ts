import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/interfaces/items.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  public search(query: string): Observable<Items> {
    const url = `${environment.urlAPI}search?q=${query}`;

    return this.http.get<Items>(url);
  }
}
