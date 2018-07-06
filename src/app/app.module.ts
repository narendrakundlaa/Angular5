import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EmployeeComponent} from './employee/emp.component';
import { ArrayStringComponent } from './arrayString/arrayString.component';
import { DepartmentComponent } from './DeptDetails/dept.component';
import { PropertyBindingComponent } from './Bindings/propertyBinding.component';
import { DataBindComponent } from './Bindings/dataBinding/dataBind.component';
import { EventHandlingComponent } from './eventHandling/eventHandling.component';
import { DynamicEventHandlingComponent } from './eventHandling/dynamicEvent.component';
import { PipeComponent} from './pipes/pipe.component';
import { EventPipe } from './pipes/customPipes/custom.pipe';
import { CustomPipeComponent } from './pipes/customPipes/customPipes.component';
import { PipeParameters } from './pipes/customPipes/custom2.pipe';
import { ParametersPipeComponent } from './pipes/customPipes/parameterPipe.component';
import { RangePipesssssComponent } from './pipes/rangPipe/range.pipe';
import { RangePipeComponent } from './pipes/rangPipe/raangepipe.component';
import { TemplateDrivenComponent } from './Forms/templateDriven.component';
import { ReactiveFormComponent } from './Forms/ReactiveForms.component';
import { ServiceComponent } from './services/service.component';
import { DemoService } from './services/demo.service';
import { MainPageSPAComponent } from './SPA/mainpage.component';
import { HomeComponent } from './SPA/home.component';
import { EmployeeSPAComponent } from './SPA/employee.component';
import { DepartmentSPAComponent } from './SPA/department.component';
import { ChildComponent } from './Input/child.component';
import { ParentComponent } from './Input/parent.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'emp', component: EmployeeSPAComponent },
  { path: 'department', component: DepartmentSPAComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ArrayStringComponent,
    DepartmentComponent,
    PropertyBindingComponent,
    DataBindComponent,
    EventHandlingComponent,
    DynamicEventHandlingComponent,
    PipeComponent,
    EventPipe,
    CustomPipeComponent,
    PipeParameters,
    ParametersPipeComponent,
    RangePipesssssComponent,
    RangePipeComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    ServiceComponent,
    MainPageSPAComponent,
    HomeComponent,
    EmployeeSPAComponent,
    DepartmentSPAComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
