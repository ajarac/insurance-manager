import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient, @Inject('API_URL') private api_url: string) {}

	get<T>(url: string): Observable<T> {
		return this.http.get<T>(this.buildUrl(url));
	}

	buildUrl(url: string): string {
		return `${this.api_url}/${url}`;
	}
}
