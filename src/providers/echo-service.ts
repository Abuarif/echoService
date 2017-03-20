import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the EchoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EchoService {

  private echoUrl = 'https://jacktools.net/api/echo/echo.php';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {
    console.log('Hello EchoService Provider');
  }

  getEcho(echo: string): Promise<string> {
  return  this.http
    .post(this.echoUrl, JSON.stringify({echo: echo}), {headers: this.headers}) // use JSON.stringify({param1: value1, param2: value2, ...}) for more than one parameter
    .toPromise()
    .then(response => response.json().echo as string)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
