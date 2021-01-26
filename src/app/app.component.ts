import { Component, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog } from '@angular/material/dialog';
import {ContactModalComponent} from './contact-modal/contact-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atlantis-web';

  showMenu?:boolean;
  isHome?:boolean;


  constructor(private router:Router, public dialog: MatDialog){
    //Init show Menu variable
    if(window.innerWidth <=800){
      this.showMenu=false;
    }else{
      this.showMenu =true;
    }
    
    if(this.router.url === "/"){
      this.isHome = true;
    }else{
      this.isHome =false;
    }
    console.log(this.isHome)
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    if(this.router.url === "/"){
      this.isHome = true;
    }else{
      this.isHome =false;
    }
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(ContactModalComponent, {
      width: 'fit-content',
      data: {},
      panelClass: 'custom-modalbox'
    });
  }

  //Visualisation Menu Conditions
  getMenuStyleWhite(){
    if(this.isHome && window.innerWidth <=800){
      return  'flex';
    } else{
       return 'none';
    } 
  }

  getMenuStyleBlue(){
    if(this.isHome && window.innerWidth <=800){
      return 'none';
    } else{
      return 'flex';
    }
  }
  getBackgroundColorMenu(){
    if(this.isHome && window.innerWidth <=800){
      return '#133854';
    } else{
      return 'none';
    }
  }

  //Get menu option Information
  getMenuInfo(){
    return{
      menuItems: [
        {name: "Atlantis Business", linked: "/atlantis"},
        {name: "Commercialisation", linked: "/commersialisation/mode-saas"},
        {name: "Nous Recrutons", linked: "/recrutement"},
        {name: "Contact", linked: "/contact"},
      ]
    };
  }

  //Call to actions information
  getCtaInfo(){
    return {value: "L'aide d'un expert ?"}
  }

  @HostListener('window:resize', ['$event'])
  hideMenuMobile(event:any){
    if(event.target.innerWidth <=800){
      this.showMenu=false;
    } else{
      this.showMenu =true;
    }
  }

  openMenuMobile(){ 
    this.showMenu=true;
  }

  closeMenuMobile(){
    this.showMenu=false;
  }

  
}
