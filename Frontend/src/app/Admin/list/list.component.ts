import { Component, Input, OnInit } from '@angular/core';
import { PayrollserviceService } from '../../payrollservice.service';
import { Router } from '@angular/router';
import { Payroll } from '../../../Model/payroll';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit{


  payrollItems:Payroll[]=[];
  @Input() list: any;
  constructor(private payrollservice:PayrollserviceService,private router:Router){}

ngOnInit(): void {
 this.get();

}
get(){
  console.log(this.list);
  this.payrollservice.getAllPayRoll().subscribe(
    {
      next:(payrolls)=>
      {
        this.payrollItems=payrolls;
      },
      error:(response)=>{
        console.log(response);
      }
    }
  )
}

deleteEmployee(id:number){
  this.payrollservice.deleteEmployee(id).subscribe(
    {
        next: (response)=>{
          this.get();
 
        },

        error:(res): void=>
        {
          console.log(res);
        }
    
    }
  )

}

}
