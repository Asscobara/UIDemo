import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataService {

    httpOptions = {
        headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin':'*'
        })
      };
   
    constructor(private httpSrv: HttpClient) {

    }
    
    private get endPoint(): string {
        return environment.serverurl;
    }

    async getUser(userId: number) {
        return this.httpSrv.get<any>(`${this.endPoint}[apiendpount]/`, this.httpOptions).toPromise<any>();
    }

}
    