import { Component, HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atlantis-web';

  showMenu?:boolean;
  isHome?:boolean;


  constructor(private router:Router){
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
    return{
      cta : [
        {value: "L'aide d'un expert ?", linked:"#"}
      ]
    };
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
