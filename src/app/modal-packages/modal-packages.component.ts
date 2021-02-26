import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-packages-modal',
  templateUrl: './modal-packages.component.html',
  styleUrls: ['./modal-packages.component.scss']
})
export class ModalPackagesComponent implements OnInit {

  pack:any;
  formData: FormGroup;
  textSubmit:string;

  constructor(public dialogRef: MatDialogRef<ModalPackagesComponent>, @Inject(MAT_DIALOG_DATA) public data: {pack: any},
               private builder: FormBuilder, private http: HttpClient) {
    this.pack = data.pack;
    this.textSubmit="";
  }

  ngOnInit(): void {
    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      function: new FormControl('', [Validators.required, Validators.minLength(4)]),
      number: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(formData:any) {
    const subjectPrefix = "DEMANDE DEVIS: "+ this.pack;
    if(this.formData.valid){
      //Replace URL to post
      this.http.post('https://formspree.io/f/meqpbobo', {
       _subject: `${subjectPrefix}${formData.value.sujet_contact}`,
       name: formData.value.name,
       function: formData.value.function,
       telephone: formData.value.number,
       email: formData.value.email
      }).pipe(
        map(
          (response:any) => {
            if (response) {
              return response;
            }
          },
          (error: any) => {
            return error;
          }
        )
      ).subscribe(
      success => console.log('success'),
      error => console.log('error')
      );
      this.textSubmit = "Merci! Nous reviendrons à vous";
      this.formData.reset();
      setTimeout(()=>{
        this.textSubmit = "";
        this.dialogRef.close();
      }, 1000);
   } else{
      this.textSubmit = "Vous devez remplir bien le formulaire!";
     }
  }

  closeModal(){
    this.dialogRef.close();
  }

}
