import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-offert',
  templateUrl: './job-offert.component.html',
  styleUrls: ['./job-offert.component.scss']
})
export class JobOffertComponent implements OnInit {

  @Input() offerts : any;
  p:number =1;

  constructor() { }

  ngOnInit(): void {
  }

}
