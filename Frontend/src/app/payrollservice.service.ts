import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payroll } from '../Model/payroll';
import { Leave } from '../Model/leave';
@Injectable({
  providedIn: 'root'
})
export class PayrollserviceService {

  baseUpiUrl="https://localhost:7201";

  constructor(private http:HttpClient) { }

  
getAllPayRoll():Observable<Payroll[]>{
  return this.http.get<Payroll[]>(this.baseUpiUrl+'/api/PayRoll');
}

addEmployee(addEmp:Payroll):Observable<Payroll[]>{
  
  addEmp.id=0;

  return this.http.post<Payroll[]>(this.baseUpiUrl+'/api/PayRoll',addEmp);
}

getEmployeeById(id:number):Observable<Payroll>{

return this.http.get<Payroll>(this.baseUpiUrl+'/api/PayRoll/'+id)
}

updateEmployee(id:number,updateEmployee:Payroll):Observable<Payroll[]>{
  return this.http.put<Payroll[]>(this.baseUpiUrl+'/api/PayRoll/'+id,updateEmployee)
}

deleteEmployee(id:number):Observable<Payroll>{
  return this.http.delete<Payroll>(this.baseUpiUrl+'/api/PayRoll/'+id);
}

// ###################################################################################################################

addLeave(addLeaves:Leave):Observable<Leave[]>{
addLeaves.l_id=0;
return this.http.post<Leave[]>(this.baseUpiUrl+'/api/PayRoll/leave',addLeaves);
}

getStatus():Observable<Leave[]>{
  return this.http.get<Leave[]>(this.baseUpiUrl+'/api/PayRoll/leave')
}

updateStatus(id:number,status:number):Observable<number>{

  const url=this.baseUpiUrl+'/api/PayRoll/leave?id='+id+'&status='+status;
  return this.http.put<number>(url,null);
}

//#########################################################################

userlogin(username:string,password:string):Observable<number>{

  const link='https://localhost:7201/api/PayRoll/login?username='+username+'&password='+password;
  return this.http.get<number>(link);
}


}

