import { Component, HostListener} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atlantis-web';

  showMenu?:boolean;


  constructor(){
  }

  ngOnInit(): void {}
  
  //Get menu option Information
  getMenuInfo(){
    return{
      menuItems: [
        {name: "Atlantis Business", linked: "/atlantis"},
        {name: "Commercialisation", linked: "/commersialisation"},
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
    if(event.target.innerWidth >=375 && event.target.innerWidth <=800){
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
