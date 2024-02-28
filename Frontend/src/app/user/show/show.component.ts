import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  leave=true;
  status=false;
  salary=false;

  leaveMehtod(){

    this.leave=true;
    this.status=false;
    this.salary=false;


  }

  statusMehtod(){

    this.leave=false;
    this.status=true;
    this.salary=false;


  }

  salaryMehtod(){

    this.leave=false;
    this.status=false;
    this.salary=true;
  }
  constructor(private router:Router){}

  logout(){
    this.router.navigate(['/login']);
  }

}
