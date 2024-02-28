import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Admin/list/list.component';
import { CreateComponent } from './Admin/create/create.component';
import { EditComponent } from './Admin/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './user/show/show.component';
import { NavigateComponent } from './Admin/navigate/navigate.component';
import { RequestComponent } from './Admin/request/request.component';



const routes: Routes = [

   {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'login',component:LoginComponent},
  {path:'user-view',component:ShowComponent},
  {path:'admin-list',component:NavigateComponent},
  {path:'requests',component:RequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
