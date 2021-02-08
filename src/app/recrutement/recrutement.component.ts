import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.scss']
})
export class RecrutementComponent implements OnInit {

  jobOffert:string = '';
  datePublication:string = '';
  noResults:boolean =false;

  @ViewChild('contact', {static:true}) contact: ElementRef;
  noOferts:boolean;

  constructor() { }

  ngOnInit(): void {
    if((this.getJobOffert as any).length > 0){
      this.noOferts = false;
    } else{
      this.noOferts = true;
    }
  }

  ngDoCheck(){
    this.getResultFilter(this.jobOffert);
  }

  getResultFilter(term: any = ""){
    const offerts:any = this.getJobOffert();
    let list:any[] =[];
    if(term){
      list = offerts.filter((o:any) => o.charge.includes(term.toUpperCase()));
      if(list.length == 0){
        this.noResults = true;
      }
    }

    //Validation
    if(!this.jobOffert){
      this.noResults = false;
    }
  }

  getJobOffert(){
    //charge : string type -  description : string type - important: string type - date: string Type"
    return [];
  }

}
