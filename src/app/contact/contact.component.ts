import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  //Map Variables
  lat:number= 45.73;
  lng:number= 4.93;
  zoom:number= 15;

  //Width 
  width:boolean;

  //Form Data
  formData: FormGroup;
  validForm:boolean;
  textSubmit:string;

  constructor(private builder: FormBuilder, private http: HttpClient) { 
    this.textSubmit="";
    this.validForm=false;
    if(window.innerWidth >=350 && innerWidth<=800){
      this.width =true;
    } else {
      this.width =false;
    }
  }

  ngOnInit(): void {
    //Form
    this.formData = this.builder.group({
      sujet_contact: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      function: new FormControl('', [Validators.required, Validators.minLength(4)]),
      enterprise: new FormControl('', [Validators.required, Validators.minLength(4)]),
      number: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required, Validators.minLength(6)]),
      zip_code: new FormControl('', [Validators.required, Validators.minLength(4)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  ngDoCheck(){
    if(this.formData.valid){
      this.validForm=true;
    }else{
      this.validForm=false;
    }
  }

  onSubmit(formData:any) {
    const subjectPrefix = "CONTACT MESSAGE:"
    if(this.formData.valid){
      this.http.post('https://formspree.io/f/mjvpldvy', {
       name: formData.value.name,
       lastname: formData.value.lastname,
       _subject: `${subjectPrefix}${formData.value.sujet_contact}`,
       email: formData.value.email,
       function: formData.value.function,
       enterprise: formData.value.enterprise,
       telephone: formData.value.number,
       address: formData.value.address,
       code:  formData.value.zip_code,
       message: formData.value.message
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
      this.textSubmit = "Votre message a été envoyé!";
      this.formData.reset();
      setTimeout(()=>{                           
        this.textSubmit = "";
      }, 1000);
   } else{
    this.textSubmit = "Vous devez remplir bien le formulaire";
   }
    
    
  }


  

  zoomIn(){
    this.zoom+=2;
  }

  zoomOut(){
    this.zoom-=2;
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
