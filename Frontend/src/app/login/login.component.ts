import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PayrollserviceService } from '../payrollservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username:string="";
  password:string="";
  show:boolean=false;
  empname:string="";
  emppass:string="";
 

  constructor(private router:Router,private service:PayrollserviceService){}

  submit(){
if(this.username === "saseentharan" && this.password === "1234"){

    this.router.navigate(['admin-list']);
}
else{
  alert("Username and Password are invalid");
}
}
display(){
  this.show=true;

}

displayEmp(){
  this.show=false;
 
}

empsubmit(){
   
  this.service.userlogin(this.empname,this.emppass)
  .subscribe({
   next:(user)=>
   {
    if(user==1){

      this.router.navigate(['user-view']);

    }

    else{
      alert("username and password is invalid");
    }
   
   
   },
   error:(response)=>
   {
    //  alert(this.username+""+this.password);
     alert('Username or Password is invalid!!');
     console.log(response);
   }

 }
   
 )
}

}
