import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporting-archive',
  templateUrl: './reporting-archive.component.html',
  styleUrls: ['./reporting-archive.component.css']
})
export class ReportingArchiveComponent implements OnInit {

  constructor() { }

  cities: any[];

  ngOnInit(): void {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

}
