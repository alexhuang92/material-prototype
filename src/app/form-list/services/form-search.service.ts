import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormSearchResult } from '../models/form-search-result.model';

@Injectable({
  providedIn: 'root',
})
export class FormSearchService {
  constructor(private httpClient: HttpClient) {}

  search(
    courseId: number,
    filter = '',
    sortOrder = 'asc',
    pageNumber = 0,
    pageSize = 5
  ): Observable<FormSearchResult[]> {
    return this.httpClient.get<FormSearchResult[]>(
      'http://localhost:3000/forms',
      {
        params: new HttpParams()
          .set('courseId', courseId.toString())
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString()),
      }
    );
  }
}
