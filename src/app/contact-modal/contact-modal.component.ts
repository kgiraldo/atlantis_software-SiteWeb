import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {

  widthWindow:boolean;

  constructor(public dialogRef: MatDialogRef<ContactModalComponent>) { 
    if(window.innerWidth >=350 && innerWidth<=800){
      this.widthWindow =true;
    } else {
      this.widthWindow =false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event']) 
  getSizeWindow(event:any){
    if(event.target.innerWidth >=350 && event.target.innerWidth <=800 ){
      this.widthWindow =true;
    }else{
      this.widthWindow =false;
    }
  }

}
