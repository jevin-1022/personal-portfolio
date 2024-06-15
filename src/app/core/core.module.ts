import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication/authentication.service';
import { ApiPrefixInterceptor } from './authentication/api-prefix.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthenticationService,
    ApiPrefixInterceptor,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : ApiPrefixInterceptor,
      multi : true
    }
  ]
})
export class CoreModule { }
