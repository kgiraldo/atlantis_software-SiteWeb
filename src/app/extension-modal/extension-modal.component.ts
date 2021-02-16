import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-extension-modal',
  templateUrl: './extension-modal.component.html',
  styleUrls: ['./extension-modal.component.scss']
})
export class ExtensionModalComponent implements OnInit {

  extension: any;
  widthWindow:boolean;

  constructor(public dialogRef: MatDialogRef<ExtensionModalComponent>, @Inject(MAT_DIALOG_DATA) public data: {extension: any}) {
    this.extension = this.data.extension;
  }

  ngOnInit(): void {
    if(window.innerWidth >=350 && innerWidth<=800){
      this.widthWindow =true;
    } else {
      this.widthWindow =false;
    }
  }

  getColorBack(){
    if(this.extension.name.includes('B2C')){
      return '#133854';
    } else if (this.extension.name.includes('B2B')|| this.extension.name.includes('Contact')){
      return '#f5f5f5';
    } else{
      return "#fe5002";
    }
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
