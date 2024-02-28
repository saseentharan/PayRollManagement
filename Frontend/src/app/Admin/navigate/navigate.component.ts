import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent {
   
  list=true;
  create=false;
  requests=false;

  ListMehtod(){

    this.list=true;
    this.create=false;
    this.requests=false;


  }

  CreateMehtod(){

    this.list=false;
    this.create=true;
    this.requests=false;
    


  }

  requestMehtod(){

    this.list=false;
    this.create=false;
    this.requests=true;


  }
  constructor(private router:Router){}

  logout(){
    this.router.navigate(['/login']);
  }

}
