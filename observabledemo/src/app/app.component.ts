import { Component,OnInit } from '@angular/core';
import { EmpService } from './emp.service';
@Component({
  selector: 'app-root',
  template: `<h1>Observables Demo</h1>
  <ul *ngFor="let emps of details">
  <li>{{emps.id}}     {{emps.name}}</li>
  </ul>
  `
})
export class AppComponent {
public details=[];
constructor(private empserv:EmpService){

}
	  ngOnInit(){
        this.empserv.getemp().subscribe(data=>this.details=data);


    }
}
