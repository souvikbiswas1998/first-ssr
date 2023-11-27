import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';
// import { MyHttpInterceptor, myintercept } from './http.interceptor';
// import { withDebugTracing } from '@angular/router';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch())  //to not fetch api from client side
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

// export const authenticationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
//   HttpHandlerFn) => {
//   const userToken = 'MY_TOKEN'; const modifiedReq = req.clone({
//     headers: req.headers.set('Authorization', `Bearer ${userToken}`),
//   });

//   return next(modifiedReq);
// };
