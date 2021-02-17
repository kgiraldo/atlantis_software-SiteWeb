import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss']
})
export class FeedbackModalComponent implements OnInit {

  extension: any;
  widthWindow:boolean;

  constructor(public dialogRef: MatDialogRef<FeedbackModalComponent>) {}

  ngOnInit(): void {
    setTimeout(()=>{
      this.dialogRef.close();
    }, 900);
  }

}
