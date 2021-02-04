import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-job-offert',
  templateUrl: './job-offert.component.html',
  styleUrls: ['./job-offert.component.scss']
})
export class JobOffertComponent implements OnInit {

  //Offerts
  @Input() offerts : any;

  //Pagination
  p:number =1;

  //Search
  filtered:any[] =[];

  //date = new Date();
  constructor() {
  }

  ngOnInit(): void {
    this.filter();
  }

  filter(term: any = "") {
    term = (term as any).trim();
    if (term) {
      this.filtered = this.offerts.filter((offert:any) => offert.charge.includes(term.toUpperCase()))
    } else {
      this.filtered = this.offerts;
    }

    if(this.filtered.length == 0){
      this.filtered = this.offerts;
    }
  }

}
