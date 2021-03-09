import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';





@Component({
  selector: 'at-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {




  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cd.detectChanges();


  }



}
