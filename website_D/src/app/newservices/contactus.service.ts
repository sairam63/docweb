// src/app/contactus.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  private serverUrl = 'http://localhost:3000/contactus/submit'; // Replace with your server API endpoint

  constructor(private http: HttpClient) {}

  submitContactForm(formData: any): Observable<any> {
    // return this.http.post<any>(this.serverUrl, formData);
    return this.http.post('http://localhost:3000/contactus/submit', formData)
    .pipe(
      tap((response: any) => {
        console.log('Response from Server:', response);
      }),
      catchError((error: any) => {
        console.error('Error from Server:', error);
        throw error; // Rethrow the error for further handling
      })
    );
  }
}
