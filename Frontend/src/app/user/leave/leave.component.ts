import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Leave } from 'src/Model/leave';
import { PayrollserviceService } from 'src/app/payrollservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {

  addLeaves:Leave={
    l_id: 0,
    from_date: new Date(),
    to_date: new Date(),
    reason:'',
    detuction: 0,
    leaves: 0,
    status: 0,
    e_id: 0,
    empname:''
  }

  constructor(private payrollservice : PayrollserviceService,private router:Router){}

    
  createLeave(){
    this.payrollservice.addLeave(this.addLeaves).subscribe(
      {
        next:(res)=>
        {
          
          console.log(res);
        },
        error:(response)=>
        {
          console.log(response);
        }
      }
    )
  }
}
