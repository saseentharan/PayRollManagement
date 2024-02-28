import { Component, OnInit } from '@angular/core';
import { Payroll } from '../../../Model/payroll';
import { PayrollserviceService } from '../../payrollservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  editEmp:Payroll={
    id: 0,
    empName: '',
    dob: new Date(),
    accNo: 0,
    leave: 0,
    detuction: 0,
    salary: 0,
    username: '',
    pass: ''  
  };


  constructor(private payrollservice:PayrollserviceService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
     next:(params)=>
                    
     {
       const id=params.get('id');
       if(id)
       {
         this.payrollservice.getEmployeeById(Number(id))
         .subscribe({
           next:(response)=>{
             this.editEmp=response;
             console.log(response);
           }
         })
       
        }
    
     }
    })
  }
  updateHouse()
  {
    this.payrollservice.updateEmployee(Number(this.editEmp.id),this.editEmp)
    .subscribe({
      next:(response)=>
      {
        this.router.navigate(['admin-list']);
     
      },
      error:(response)=>
      {
        console.log(response);
      }
    });
  }
  

}
