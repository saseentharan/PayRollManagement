import { Component, OnInit } from '@angular/core';
import { Leave } from '../../../Model/leave';
import { PayrollserviceService } from 'src/app/payrollservice.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']

})




export class StatusComponent implements OnInit {

  items:Leave[]=[];
  displayedColumns: string[] = ['empname','position', 'name', 'weight', 'symbol','status'];



  constructor(private leaveservice : PayrollserviceService){}
  ngOnInit(): void {
   
    this.leaveservice.getStatus().subscribe(
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

    // this.leaveservice.getStatus().subscribe((leaveData: any[]) => {
    //   this.leaveservice.getAllPayRoll().subscribe((payrollData: any[]) => {
    //     // Combine the data as needed
    //     this.data = leaveData.map(leave => {
    //       const payrollRecord = payrollData.find(payroll => payroll.id === leave.e_id);
    //       return {
       
    //         name: payrollRecord.empName,
    //         from_date: leave.from_date,
    //         to_date: leave.to_date,
    //         leaves: leave.leaves,
    //         reason: leave.reason,
    //         status: leave.status
    //       };
    //     });
 
    //   });
    // });

   
  





}
