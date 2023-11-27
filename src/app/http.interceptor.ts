import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/internal/operators/tap';
// import { ApiService } from './service/api.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) // private service: ApiService
  { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // this.service.loader.next(true);
    let access_token = localStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${access_token}`,
        // "Access-Control-Expose-Headers": "*",
        // "Access-Control-Allow-Headers": "*"
      },
    });
    return next.handle(request).pipe(
      // finalize(() => this.service.loader.next(false)),
      tap({
        next: (httpEvent) => {
          // console.log(httpEvent);
          if (httpEvent instanceof HttpResponse) {
            // console.log(httpEvent.headers.keys())
            // console.log(httpEvent.headers.getAll('host-header'), 'host header');
            // console.log(httpEvent.headers.has('token'), 'token');
            // console.log(httpEvent.headers.keys(),'responses');
          }
        },
        error: (err: any) => {
          // console.log(err,'intercept');

          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 401:
                localStorage.setItem(
                  'temp_url',
                  localStorage.getItem('url') || '/'
                );
                localStorage.removeItem('token');
                this.router.navigate(['/login']);
                break;
              case 402:
                localStorage.setItem(
                  'temp_url',
                  localStorage.getItem('url') || '/'
                );
                localStorage.removeItem('token');
                this.router.navigate(['/login']);
                break;
              case 403:
                localStorage.setItem(
                  'temp_url',
                  localStorage.getItem('url') || '/'
                );
                localStorage.removeItem('token');
                this.router.navigate(['/login']);
                break;
              // case 500:
              // localStorage.setItem('temp_url', localStorage.getItem('url') || '/')
              // localStorage.removeItem('token');
              // this.router.navigate(['/login']);
              // break;
              default:
                // this.router.navigate(['info/error']);
                return;
            }
          }
          return err;
        },
      })
    );
  }
}

export function myintercept(
  request: HttpRequest<unknown>,
  next: HttpHandler
): Observable<HttpEvent<unknown>> {
  // this.service.loader.next(true);
  let access_token = localStorage.getItem('token');
  request = request.clone({
    setHeaders: {
      Authorization: `Bearer ${access_token}`,
      // "Access-Control-Expose-Headers": "*",
      // "Access-Control-Allow-Headers": "*"
    },
  });
  return next.handle(request).pipe(
    // finalize(() => this.service.loader.next(false)),
    tap({
      next: (httpEvent) => {
        if (httpEvent instanceof HttpResponse) {
          console.log(httpEvent);
          // console.log(httpEvent.headers.keys())
          // console.log(httpEvent.headers.getAll('host-header'), 'host header');
          // console.log(httpEvent.headers.has('token'), 'token');
          // console.log(httpEvent.headers.keys(),'responses');
        }
      },
      error: (err: any) => {
        console.log(err, 'intercept');

        // if (err instanceof HttpErrorResponse) {
        //   switch (err.status) {
        //     case 401:
        //       localStorage.setItem(
        //         'temp_url',
        //         localStorage.getItem('url') || '/'
        //       );
        //       localStorage.removeItem('token');
        //       this.router.navigate(['/login']);
        //       break;
        //     case 402:
        //       localStorage.setItem(
        //         'temp_url',
        //         localStorage.getItem('url') || '/'
        //       );
        //       localStorage.removeItem('token');
        //       this.router.navigate(['/login']);
        //       break;
        //     case 403:
        //       localStorage.setItem(
        //         'temp_url',
        //         localStorage.getItem('url') || '/'
        //       );
        //       localStorage.removeItem('token');
        //       this.router.navigate(['/login']);
        //       break;
        //     // case 500:
        //     // localStorage.setItem('temp_url', localStorage.getItem('url') || '/')
        //     // localStorage.removeItem('token');
        //     // this.router.navigate(['/login']);
        //     // break;
        //     default:
        //       // this.router.navigate(['info/error']);
        //       return;
        //   }
        // }
        return err;
      },
    })
  );
}