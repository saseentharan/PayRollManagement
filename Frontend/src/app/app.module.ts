import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Admin/list/list.component';
import { CreateComponent } from './Admin/create/create.component';
import { EditComponent } from './Admin/edit/edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './user/show/show.component';
import { LeaveComponent } from './user/leave/leave.component';
import { StatusComponent } from './user/status/status.component';
import { TabViewModule } from 'primeng/tabview';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigateComponent } from './Admin/navigate/navigate.component';
import { RequestComponent } from './Admin/request/request.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SalaryComponent } from './user/salary/salary.component';
import { MatTableDataSource } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    ShowComponent,
    LeaveComponent,
    StatusComponent,
    NavigateComponent,
    RequestComponent,
    SalaryComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    TabViewModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ConfirmDialogModule,
    ReactiveFormsModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
