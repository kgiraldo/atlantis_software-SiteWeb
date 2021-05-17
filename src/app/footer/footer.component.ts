import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //Form Variables
  formData: FormGroup;
  @ViewChild('sc_feedback_text', {static:true}) feedbackText: ElementRef;

  constructor(private router:Router, private builder:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    //console.log(this.feedbackText.nativeElement.sty)
    this.formData = this.builder.group({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  //Form send information
  onSubmit(data:any){
    const sujetMessage = "DEMANDE D'INFORMATIONS SUR ATLANTIS BUSINESS";
    if(this.formData.valid){
      this.http.post('https://formspree.io/f/xwkwzbpj', {
        _subject: `${sujetMessage}`,
        email: data.value.email
      }).pipe(
        map(
          (response:any) => {
            if (response) {
              return response;
            }
          },
          (error:any) => {
            return error;
          }
        )
      ).subscribe(
        success => console.log('success'),
        error => console.log('error')
      );
      this.formData.reset();
      this.feedbackText.nativeElement.style.visibility = "visible";
      setTimeout(()=>{
        this.feedbackText.nativeElement.style.visibility = "hidden";
      }, 800);
    }
  }

  //Get Address Information
  getAddressInfo(){
    return{
      campus: [
        { name : "Agence", address:"12 rue Edison | 69500, Bron "},
        { name: "Siège social", address: "10 Bd de la Foire | 1528, Luxembourg "}
      ]
    };
  }

  clickMentionLegale(){
    this.router.navigate(['/mention-legales']);
  }

  clickHome(){
    this.router.navigate(['/']);
  }

}
