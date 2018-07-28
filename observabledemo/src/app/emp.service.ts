import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{IEmp} from'./iemp';
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private url:string="/assets/demo.json";

  constructor(private http:HttpClient) { }

  getemp():Observable<IEmp[]>{

    return this.http.get<IEmp[]>(this.url);
  }

}
