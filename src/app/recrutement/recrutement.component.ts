import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  //FormData
  formData:FormGroup;
  valid:boolean;
  textSubmit:string;

  constructor(private builder:FormBuilder, private http:HttpClient) { 
    this.valid = false;
    this.textSubmit = "";
  }

  ngOnInit(): void {
    //Get Offerts State
    if((this.getJobOffert as any).length > 0){
      this.noOferts = false;
    } else{
      this.noOferts = true;
    }

    //Form group
    this.formData = this.builder.group({
      lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      number: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cvValidator: new FormControl ( '', [Validators.required]),
      cv: [""],
      letterValidator: new FormControl ('', [Validators.required]),
      letter: [""],
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  ngDoCheck(){
    this.getResultFilter(this.jobOffert);

    //Valid Form auth
    if(this.formData.valid){
      this.valid=true;
    }else{
      this.valid=false;
    }
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

  // Offert Information
  getJobOffert(){
    //charge : string type -  description : string type - important: string type - date: string Type"
    return [];
  }

  onFileChange(event:any) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      (this.formData.get('cv')as any).setValue(file);
     }
  }

  onFileChangeLetter(event:any) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      (this.formData.get('letter')as any).setValue(file);
     }
  }

  prepareSave(){
    let input = new FormData();
    input.append('lastname', (this.formData.get('lastname')as any).value);
    input.append('name', (this.formData.get('name')as any).value);
    input.append('telephone', (this.formData.get('number')as any).value);
    input.append('email', (this.formData.get('email')as any).value);
    input.append('message', (this.formData.get('message')as any).value);
    input.append('cv', (this.formData.get('cv')as any).value);
    input.append('letter', (this.formData.get('letter')as any).value);
    return input; 
  }

  //Submit POST to email
  onSubmit(formData:any) {
    const formModel = this.prepareSave();
    console.log(formModel.get('cv'))

    //const subjectPrefix = "CANDIDATURE RECRUTEMENT:"
    if (this.formData.valid) {
      const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
      //Replace url to post
      this.http.post('https://formspree.io/f/mpzongyj', formModel ,{ headers: headers }).subscribe(
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


}
