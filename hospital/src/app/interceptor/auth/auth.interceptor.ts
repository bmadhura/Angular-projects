import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpEventType,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = window.localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `${token}`
        }
      });
    }

    return next.handle(request).pipe(
      tap((event) => {
        // console.log(event);
        if (event.type === HttpEventType.Response) {
          if (event.status === 200) {
            // alert('Logged In successfully');
          }
        }
      })
    );
  }
}
