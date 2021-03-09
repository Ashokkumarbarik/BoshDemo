import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MenuModule, PanelModule, ChartModule, InputTextModule, ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule, RadioButtonModule, FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule, SliderModule, RatingModule, DataTableModule, ContextMenuModule, TabViewModule, DialogModule, StepsModule, ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule, ConfirmationService, ConfirmDialogModule, GrowlModule, DragDropModule, GalleriaModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
//import { StatisticComponent } from './statistic/statistic.component';
import {  ViewComponent } from './view/view.component';
import { ProfileComponent } from './profile/profile.component';
import {  TestComponent } from './test/test.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FielderrorsComponent } from './fielderrors/fielderrors.component';
import { UserListsComponent } from './dashboard/userLists/user-lists.component';
import { UserProfileComponent } from './dashboard/userProfile/user-profile.component';
import { CustomerService } from 'customerservice';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';


const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "test", component: TestComponent },
  { path: "view", component: ViewComponent},
  { path: "user", component: UserComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewComponent,
    UserComponent,

    TestComponent,
    ProfileComponent,
    FielderrorsComponent,
    UserListsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule,
    TableModule,
    HttpClientModule,


  ],
  providers: [ ConfirmationService, CustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
