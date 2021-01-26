import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  //Map Variables
  lat=45.73093252052653;
  lng=4.929725704731475;


  //Width 
  width:boolean;

  constructor() { 
    if(window.innerWidth >=350 && innerWidth<=800){
      this.width =true;
    } else {
      this.width =false;
    }
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event']) 
  getSizeWindow(event:any){
    if(event.target.innerWidth >=350 && event.target.innerWidth <=800 ){
      this.width =true;
    }else{
      this.width =false;
    }
  }

}
