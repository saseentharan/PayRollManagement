import { Component, OnInit } from '@angular/core';
import { Payroll } from '../../../Model/payroll';
import { PayrollserviceService } from '../../payrollservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  addEmp:Payroll={
    id: 0,
    empName: '',
    dob: new Date(),
    accNo: 0,
    leave: 0,
    detuction: 0,
    salary: 0,
    username: '',
    pass: ''
  }



  constructor(private payrollservice:PayrollserviceService,private router:Router){}
  ngOnInit(): void {
    
    
  }

  createEmployee(){
    this.payrollservice.addEmployee(this.addEmp).subscribe(
      {
        next:(payroll)=>
        {
          this.router.navigate(['admin-list']);
          console.log(payroll);
        },
        error:(response)=>
        {
          console.log(response);
        } 
      }
    )
  }

  submit(){
    alert("sucessfully added");
  }
}
