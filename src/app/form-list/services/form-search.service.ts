import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FormSearchRequest } from '../models/form-search-request.model';
import { FormSearchResponse } from '../models/form-search-response.model';
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

  postSearch(searchRequest: FormSearchRequest): Observable<FormSearchResponse> {
    const options = {
      params: new HttpParams(),
      observe: 'response' as 'body',
    };

    const httpParams = new HttpParams().set('limit', 0);

    const response = this.httpClient
      .post<HttpResponse<FormSearchResponse>>(
        'https://localhost:5001/forms',
        searchRequest,
        {
          params: httpParams,
          observe: 'response' as 'body',
        }
      )
      .pipe(
        map((resp) => {
          console.log(resp.headers.keys());
          const totalCount = parseInt(resp.headers.get('X-Total-Count') ?? '0');

          if (!resp.body) {
            throw new Error('Unable to read body contents');
          }

          const response: FormSearchResponse = resp.body;
          return response;
        })
      );

    return response;
  }
}
