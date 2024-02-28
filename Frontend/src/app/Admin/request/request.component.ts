import { Component ,Input, OnInit} from '@angular/core';
import { Leave } from 'src/Model/leave';
import { PayrollserviceService } from 'src/app/payrollservice.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  items:Leave[]=[];     

  displayedColumns: string[] = ['empname','position', 'name', 'weight', 'symbol','button'];
  res:number=0;

  @Input() parentcomponent!:any[];
    
  constructor(private leaveservice : PayrollserviceService){}
  ngOnInit(): void {

    console.log(this.parentcomponent+" wdwe");

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

  reject(id:number){
    this.res=2;
 
    this.leaveservice.updateStatus(id,this.res).subscribe(
      {
        next:(leave)=>
        {
          console.log(leave)
        },
        error:(response)=>{
          console.log(response);
        }
      }
    )
  }
  accept(id:number){
    this.res=1;
    
    this.leaveservice.updateStatus(id,this.res).subscribe(
      {
        next:(leave)=>
        {
          console.log(leave)
        },
        error:(response)=>{
          console.log(response);
        }
      }
    )
  

  }


}
