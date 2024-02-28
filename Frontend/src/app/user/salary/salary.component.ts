import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/Model/leave';
import { Payroll } from 'src/Model/payroll';
import { PayrollserviceService } from 'src/app/payrollservice.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit{

    id:number=0;
    day:string="";
    items:Leave[]=[];
    displayedColumns: string[] = ['empname','position', 'name', 'weight', 'symbol','status'];

    payrollres!:Payroll;



    constructor(private payrollservice :PayrollserviceService){}
 
  ngOnInit(): void {
   
    this.payrollservice.getStatus().subscribe(
      {
        next:(leave)=>
        {
          this.items=leave;
        
        },
        error:(response)=>{
          console.log(response);
        }
      }
    )

  }

  submit(){    
    this.payrollservice.getEmployeeById(this.id).subscribe(
       {
         next:(payroll)=>
         {
             
             this.payrollres=payroll;
          
             console.log(payroll+"hih");
       
         },
         error:(response)=>
         {
           console.log(response);
         }
       }
     )
   } 

    
}
