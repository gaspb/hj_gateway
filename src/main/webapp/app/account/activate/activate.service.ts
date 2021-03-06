import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivateService {
    constructor(private http: HttpClient) {}

    get(key: string): Observable<any> {
        return this.http.get(SERVER_API_URL + 'uaa/api/activate', {
            params: new HttpParams().set('key', key)
        });
    }
}
